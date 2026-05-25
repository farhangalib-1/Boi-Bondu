import Image from 'next/image'
import React from 'react'

const Customer = ({el}) => {
  return (
    <div className='border rounded-2xl'>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLbOasrP2azsdMM1tvCRXeHVcSPK0kV1WfA&s" alt='avatar' width={60} height={60} className='inline mt-4' />
      <h1>নামঃ {el.name}</h1>
      <h1>প্রোফেশানঃ {el.profession}</h1>
      <h1>রিভিউঃ {el.review}</h1>
      <h1 className='mb-4'>রেটিংসঃ {el.rating}</h1>
    </div>
  )
}

export default Customer
