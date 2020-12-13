import React from "react";
import ReactDOM from "react-dom";

import "./index.css";



const books = [
  {
    id:1,
    img:"https://m.media-amazon.com/images/I/9138VXjBfPL._AC_UY436_QL65_.jpg",
    title:"The Power of Your Subconsious Mind",
    author:"Dr. Joseph Murphy"
  },
  {
    id:2,
    img:"https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY436_QL65_.jpg",
    title:"Think Like a Monk",
    author:"Jay Shetty"
  }
];

const img = "https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY436_QL65_.jpg";

function BookList(){
  return <section className="booklist">
<Book 
img = {books[0].img} 
title = {books[0].title}
author = {books[0].author}
/>
<Book 
img = {books[1].img} 
title = {books[1].title}
author = {books[1].author}
/>
<Book 
img = {books[0].img} 
title = {books[0].title}
author = {books[0].author}
/>

  </section>
}


function Book(props){
  return <article className="book">
    <img src = {props.img} />
    <h2>{props.title}</h2>
    <h3>{props.author}</h3>
  </article>
}


ReactDOM.render(<BookList />, document.getElementById("root"));