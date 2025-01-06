import React from 'react'
import ChatSideBar from '../components/ChatSideBar/ChatSideBar'
import ChatWindow from '../components/ChatWindow/ChatWindow'

const ChatPage:React.FC = () => {
  return (
    <section className='w-full h-full'>
      <ChatSideBar/>
      <ChatWindow/>
    </section>
  )
}

export default ChatPage
