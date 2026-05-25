'use client'
import { Button } from '@heroui/react'
import Image from 'next/image'
import React, { useState } from 'react'

const Singlebook = ({selectedBook}) => {
    const [isBorrow, setIsBorrow] = useState(false)
  return (
    <div className='flex flex-col md:flex-row justify-center gap-20  items-center mt-10'>
       
      <div>
        <Image src={selectedBook.image_url} alt={selectedBook.title} width={300} height={400}  />
      </div>
      <div className='space-y-2'>
        <h1>বইয়ের নামঃ {selectedBook.title}</h1>
        <h1>লেখকের নামঃ {selectedBook.author}</h1> 
        <h1>বর্ণনাঃ {selectedBook.description}</h1>
        <h1>ধরনঃ {selectedBook.category} </h1>
        <h1>Available: { isBorrow ? parseInt(selectedBook.available_quantity)-1 : selectedBook.available_quantity} books are left</h1>
        <Button onClick={()=>{setIsBorrow(true)}}>{isBorrow ? 'Borrowed' : 'Borrow Now'}</Button>
        
      </div>
       
    </div>
  )
}

export default Singlebook
