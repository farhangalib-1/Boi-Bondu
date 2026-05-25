'use client'
import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'
import { authClient } from "@/lib/auth-client"
import {ArrowRightToSquare} from '@gravity-ui/icons';
import Marquee from "react-fast-marquee";
const Navbar = () => {
  const newArrivals = [
  {
    id: 1,
    title: "জোছনা ও জননীর গল্প",
    message:
      " জোছনা ও জননীর গল্প | 20% OFF Special Discount on Memberships",
    category: "ঐতিহাসিক উপন্যাস",
    discount: "20% OFF",
  },
  {
    id: 2,
    title: "পারাবার",
    message:
      " পারাবার | 15% OFF Special Discount on Memberships",
    category: "সাহিত্য",
    discount: "15% OFF",
  },
  {
    id: 3,
    title: "অরণ্যের দিনরাত্রি",
    message:
      " অরণ্যের দিনরাত্রি | 25% OFF Special Discount on Memberships",
    category: "অ্যাডভেঞ্চার",
    discount: "25% OFF",
  },
  {
    id: 4,
    title: "নীললোহিত সমগ্র",
    message:
      " নীললোহিত সমগ্র | 10% OFF Special Discount on Memberships",
    category: "ফিকশন",
    discount: "10% OFF",
  },
  {
    id: 5,
    title: "একাত্তরের দিনগুলি",
    message:
      " একাত্তরের দিনগুলি | 30% OFF Special Discount on Memberships",
    category: "মুক্তিযুদ্ধ",
    discount: "30% OFF",
  },
  {
    id: 6,
    title: "সেই সময়",
    message:
      " সেই সময় | 18% OFF Special Discount on Memberships",
    category: "ক্লাসিক",
    discount: "18% OFF",
  },
  {
    id: 7,
    title: "দূরবীন",
    message:
      " দূরবীন | 12% OFF Special Discount on Memberships",
    category: "রহস্য",
    discount: "12% OFF",
  },
  {
    id: 8,
    title: "রূপালী দ্বীপ",
    message:
      " রূপালী দ্বীপ | 22% OFF Special Discount on Memberships",
    category: "কিশোর উপন্যাস",
    discount: "22% OFF",
  },
];
  const { data: session } = authClient.useSession()
  const user = session?.user
 
  return (
    <div>
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
          user ? <div className='flex items-center gap-3' > <h1>Hello, {user.name}</h1> <Button onClick={async()=>{await authClient.signOut()}} >Logout</Button> </div>:<Link href="/signin" ><Button><ArrowRightToSquare /> Login</Button></Link>
        }
        
      </div>
    </div>
    <div className='border p-4 flex gap-4 text-center bg-pink-600 text-white font-bold'>
      <div className='font-bold border px-4 rounded-lg' >
        New Arrival
      </div>
    <Marquee pauseOnHover={true} speed={60}>
      
      {
        newArrivals.map(el=><div> <h1 className='mr-20'>{el.message} </h1> </div>)
      }
    </Marquee>
    </div>
    </div>
  )
}

export default Navbar
