import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends React.Component {
  render() {
    return (
      <div className="BookShelf">
        <Book />
      </div>
    );
  }
}

export default BookShelf;
