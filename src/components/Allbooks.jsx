import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Allbooks = ({ data }) => {
  return (
    <div className='border p-4 rounded-lg shadow-md '>
      <div>
      <Image src={data.image_url} alt={data.title} width={200} height={300} className='border w-full h-90 rounded'/>
      </div>
      <h1 className='mt-3'> <span className='font-bold'>বইয়ের নামঃ </span> {data.title}</h1>
      <p className='mt-1'> <span className='font-bold'>লেখকঃ </span> {data.author}</p>
      <Link href={`/book/${data.id}`}>
        <Button className='mt-3 w-full'>View Details</Button>
      </Link>
    </div>
  )
}

export default Allbooks
