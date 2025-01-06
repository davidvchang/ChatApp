import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import BtnMenu from './BtnMenu'

const ProfileHeader:React.FC = () => {
  return (
    <div className='flex w-full min-h-20 justify-between items-center border-b p-3'>
      <div className='flex gap-3'>
        <ProfilePhoto/>

        <div className='flex flex-col'>
          <span className='text-lg font-medium'>David Valenzuela</span>
          <span className='text-sm text-slate-500 font-light'>Información de la cuenta</span>
        </div>
      </div>

      <BtnMenu/>

    </div>
  )
}

export default ProfileHeader
