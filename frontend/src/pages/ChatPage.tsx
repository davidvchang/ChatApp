import React from 'react'
import ChatSideBar from '../components/ChatPage/ChatSideBar'
import ChatWindow from '../components/ChatPage/ChatWindow'

const ChatPage:React.FC = () => {
  return (
    <section className='w-full h-screen bg-[#F3F4F6] p-5 flex'>
      <ChatSideBar/>
      <ChatWindow/>
    </section>
  )
}

export default ChatPage
