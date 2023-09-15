// importing dependencies
import express from "express";
import mongoose from "mongoose";
import Messages from "./db-messages";
import Pusher from 'pusher';

// app configurations
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1577495",
    key: "7aed8aa83342e44a6f72",
    secret: "f76213d4001e87280682",
    cluster: "ap2",
    useTLS: true
  });

// middleware
app.use(express.json())

const db = mongoose.connection;

db.once("open", ()=>{
    console.log("DB connection is successful");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change",(change)=>{
        console.log("A change has occured", change);
    });

    // trigger the Pusher here based on the type of change.

});


// mongoDB configuration
const connection_url = ""
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// api routes
app.get('/', (req,res)=>res.status(200).send('hello world')); // this is a health API

app.get('/messages/sync', (req, res)=>{
    Messages.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
});
});

app.post('/messages/new', (req, res)=>{
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data)=>{
        if(err){
            res.status(500).send(err) //internal server error
        }
        else{
            res.status(201).send(data) //created
        }
    })
})
// define GQL mutations and queries here

// listener
app.listen(port, ()=>console.log(`Listening on Port:${port}`));
