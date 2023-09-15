import React from 'react'
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
  return (
    <div className="sidebar">
    <div className='sidebar__header'>
      <Avatar src = "https://avatars.githubusercontent.com/u/60209393?v=4"/>
        <div className='sidebar__headerRight'>
          
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
    </div>

    <div className='sidebar__search'>
      <div className='sidebar__searchContainer'>
        <SearchIcon />
        <input placeholder="Search or Start a new conversation" type="text" />
      </div>
    </div>

    <div className='sidebar_chats'>
      <SidebarChat />
      <SidebarChat />

    </div>
  </div>
  );
}

export default Sidebar;