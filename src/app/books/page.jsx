import Allbooks from '@/components/Allbooks';
import React from 'react'
import {Label, SearchField} from "@heroui/react";
const BooksPage = async () => {
  const res = await fetch("https://boi-bondu-app.vercel.app/data.json");
  const data = await res.json();
  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-5'>All Books</h1>
      <p className='text-lg text-gray-700 text-center px-9 mt-4'>Discover a wide collection of books across Story, Tech, and Science categories. Explore timeless classics, modern programming guides, and fascinating scientific discoveries—all in one place. Find your next favorite read and borrow books anytime.</p>
      <div className='w-3/12 mx-auto'>
      <SearchField name="search">
      <Label>Search</Label>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-70" placeholder="Search by book title" />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
    </div>
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
      {
        data.map((item) => <Allbooks key={item.id} data={item} />)
      }
      </div>
    </div>
  )
}

export default BooksPage
