import Singlebook from '@/components/Singlebook';
import React from 'react'

const BookDetailsPage = async ({params}) => {
  const {Id} = await params;
  
  const res = await fetch("https://boi-bondu-app.vercel.app/data.json");
  const  data = await res.json();
  const selectedBook = data.find(data=>data.id== parseInt(Id));
  console.log(selectedBook);
 
  return (
    <div>
      <h1></h1>
      <div>
      <Singlebook key={selectedBook.id} selectedBook={selectedBook}  />
      </div>
    </div>
  )
}

export default BookDetailsPage
