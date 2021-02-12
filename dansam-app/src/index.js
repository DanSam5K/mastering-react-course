import React from 'react';
import ReactDom from 'react-dom';

//import modules
import { books } from './books';
import Book from './Book'

//css
import './index.css';

//setup vars


function BookList() {
  return (
    <section className="booklist">
      {books.map((book)=> {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}


//attribute, eventHandler onClick
//  const clickHandler = () => {
//    alert('Hello Daniel')
//  }

 

ReactDom.render(<BookList />, document.getElementById('root'));



