import React, { Component } from "react";
import BookShelf from "./BookCase";

class BookCase extends React.Component {
  render() {
    return (
      <div className="BookCase">
        <BookShelf />
      </div>
    );
  }
}

export default BookCase;
