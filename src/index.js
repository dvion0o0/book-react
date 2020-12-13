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
  },  
{
  id:3,
  img:"https://m.media-amazon.com/images/I/91mJmoqx5zL._AC_UY436_QL65_.jpg",
  title:"Think and Grow Rich",
  author:"Napoleon Hill"
},
{
  id:4,
  img:"https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY436_QL65_.jpg",
  title:"Ikigai: The Japanese Secret to a long and happy life",
  author:"Hector Garcia"
},
{
  id:5,
  img:"https://m.media-amazon.com/images/I/71fsQxIlggL._AC_UL640_QL65_.jpg",
  title:"Sapiens: A bBief History of HumanKind",
  author:"Yuval Noah Harrari"
},
{
  id:6,
  img:"https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY436_QL65_.jpg",
  title:"Attitude Is EveryThing",
  author:"Keller Jeff"
}
];

function BookList(){
  return <section className="booklist">
    {books.map((book) =>{
      return (
      <Book key={book.id} {...book} />
      )
    })}

  </section>
}


function Book(props){
  const{img, title, author} = props;
  return <article className="book">
    <img src = {img} alt="img" />
    <h2>{title}</h2>
    <h3>{author}</h3>
  </article>
}


ReactDOM.render(<BookList />, document.getElementById("root"));