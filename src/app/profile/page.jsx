'use client'
import { authClient } from '@/lib/auth-client'
import { Button } from '@heroui/react'
import React from 'react'

const Profilepage = () => {
  const { data: session } = authClient.useSession()
    const user = session?.user
  return (
    <div >
      <div className='w-4/12 border rounded-2xl mx-auto mt-10 text-center p-6 '>
      <h1 className='font-bold text-center text-4xl mb-4' >My Profile</h1>
      <div>
      <img src={user?.image} className='w-30 h-30 rounded-full inline' ></img>
      </div>
      <div className='mt-4 space-y-2'>
      <h1> <span className='font-bold '>User Name: </span>{user?.name}</h1>
      <h1><span className='font-bold '>User Email: </span>{user?.email}</h1>
      <Button className="mt-4">Update your profile</Button>
      </div>
</div>
      
    </div>
  )
}

export default Profilepage
