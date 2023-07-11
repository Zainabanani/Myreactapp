import React from 'react'

const Book = ({book}) => {
  return (
    <div>
<h1> {book.title} </h1>
    </div>
  );
};


const Booklists = ()=>{
  const books = [
    {id: 1, title: 'Sugar Girl'},
    {id: 2, title: 'Sugar Boy'},
    {id: 3, title: 'Sugar Aunt'},
    {id: 4, title: 'Sugar Uncle'}

  ]

  
return (
  <div>
    <h1>Bestselling Books</h1>
    {
      books.map((book)=>{
return <Book key={book.id} book={book}/>
      })
    }
  </div>
);
}




export default Booklists;