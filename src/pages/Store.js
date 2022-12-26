import React, { useEffect, useState } from "react";
import axios from "axios";
import useBooksContext from "../hooks/useBooksContext";

function Store(props) {
  const { store, setStore, cart, setcart, price, setPrice } = useBooksContext();

  const [input, setInput] = useState("");

  const getData = () => {
    axios.get("http://localhost:5000/books").then((response) => {
      setStore(response.data);
      console.log(store);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main-data">
      <h1>BookStore</h1>
      <div className="store-data">
        {store.map((book) => {
          return (
            <div key={book.id}>
              <h3>Title:{book.title}</h3>
              <div className="image">
                <img src={book.image} alt="book-img"></img>
              </div>
              <h3>Price:{book.price}</h3>
              <button>Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
