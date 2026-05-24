'use client'
import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'
import { authClient } from "@/lib/auth-client"
const Navbar = () => {
  const { data: session } = authClient.useSession()
  const user = session?.user
 
  

  return (
    <div className='flex justify-between items-center border-b p-4'>
      <Link href='/' >
      <div className='flex items-center'>
        
        <Image src={logo} alt='logo' width={40} height={20} ></Image>
        <h1 className='text-lg font-bold' >Boi Bondhu</h1>
        
      </div>
      </Link>
      <div>
        <ul className='flex items-baseline gap-4 font-semibold'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/books'>All Books</Link></li>
          <li><Link href='/profile'>My profile</Link></li>
        </ul>
      </div>
      <div>
        {
          user ? <div className='flex items-center gap-3' > <h1>Hello, {user.name}</h1> <Button onClick={async()=>{await authClient.signOut()}} >Logout</Button> </div>:<Link href="/signin" ><Button>Login</Button></Link>
        }
        
        
         
        
        
      </div>
    </div>
  )
}

export default Navbar
