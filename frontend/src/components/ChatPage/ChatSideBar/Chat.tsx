import React from 'react'
import ProfilePhoto from './ProfilePhoto'

interface ChatProps {
    user: string,
    message: string,
    time:string
}

const Chat:React.FC<ChatProps> = ({user, message, time}) => {
  return (
    <div className='flex gap-3 p-3 overflow-x-hidden w-full hover:bg-slate-200'>
        <ProfilePhoto/>

        <div className='flex flex-col w-full'>
            <div className=' flex justify-between items-center'>
                <span className='font-medium'>{user}</span>
                <span className='text-sm text-slate-500 font-light'>{time}</span>
            </div>
            <p className='text-sm text-slate-500 font-light truncate w-full'>{message}</p>
        </div>
    </div>
  )
}

export default Chat
