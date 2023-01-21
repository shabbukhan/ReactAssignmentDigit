import React from "react";
import "./bookstore.css";

const BookStore = (props) => {
  let book = props.book;
  let setBook = props.setBook;

  const removeItem = (idx) => {
    let arr = [...book];
    arr.splice(idx, 1);
    setBook(arr);
  };

  return (
    <ul className="listItem">
      {book.map((item, idx) => {
        return (
          <li key={`${item}-idx`}>
            {item}
            <span className="close" onClick={() => removeItem(idx)}></span>
          </li>
        );
      })}
    </ul>
  );
};

export default BookStore;
