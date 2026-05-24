import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'
const Navbar = () => {
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
        <Button>Login</Button>
      </div>
    </div>
  )
}

export default Navbar
