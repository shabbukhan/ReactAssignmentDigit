import React, { useState } from "react";
import BookStore from "../../../BookStore/BookStore";
import "./additem.css";

const AddItems = () => {
  const [book, setBook] = useState([]);

  const addList = (e) => {
    e.preventDefault();
    let inputVal = document.getElementById("addinput").value;
    document.getElementById("addinput").focus();
    document.getElementById("todo").reset();
    setBook([...book, inputVal]);
  };

  return (
    <>
      <BookStore book={book} setBook={setBook} />
      <form id="todo" className="todo">
        <h2>Add a Book</h2>
        <p>Title</p>
        <input id="addinput" type="text" />
        <button className="btn" onClick={addList}>
          Add Book
        </button>
      </form>
    </>
  );
};

export default AddItems;
