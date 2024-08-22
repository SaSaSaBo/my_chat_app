/* eslint-disable no-unused-vars */
import React from 'react'
import './Chat.css'
import LeftSidebar from '../../components/left-sidebar/LeftSidebar'
import ChatBox from '../../components/chatbox/Chatbox'
import RightSidebar from '../../components/right-sidebar/RightSidebar'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat-container'>
        <LeftSidebar />
        <ChatBox />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Chat
