import React from 'react'
import ProfileHeader from './ChatSideBar/ProfileHeader'
import InputSearch from './ChatSideBar/InputSearch'
import Chat from './ChatSideBar/Chat'

const ChatSideBar:React.FC = () => {
  return (
    <section className='min-w-80 min-h-full bg-white rounded-lg flex flex-col gap-4 overflow-y-auto'>
      <ProfileHeader/>

      <div className='p-3'>
        <InputSearch/>
      </div>

      <div className='flex flex-col pt-3'>
        <Chat user='Juan Santi' time='2:51' message='Hola, Como Estás?'/>
        <Chat user='Fernando Sola' time='2:51' message='Hola, Como Estás?'/>
        <Chat user='Jenny Ramirez' time='2:51' message='Si, entonces te mando mensaje mañana y vemos que show'/>
        <Chat user='Tanya Robles' time='2:51' message='Hola, Como Estás?'/>
        <Chat user='Tanya Robles' time='2:51' message='Hola, Como Estás?'/>
        <Chat user='Tanya Robles' time='2:51' message='Hola, Como Estás?'/>
        <Chat user='Tanya Robles' time='2:51' message='Hola, Como Estás?'/>
        <Chat user='Tanya Robles' time='2:51' message='Hola, Como Estás?'/>
      </div>
    </section>
  )
}

export default ChatSideBar
