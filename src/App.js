import React, { Component } from 'react';
import './App.css';
import { SmallBook } from './components/SmallBook';
import { Featured } from './Featured';
import { bookList } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clickedBook: null, pageIndex: 0 };
    this.onBookClick = this.onBookClick.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
  }
  onBookClick(book) {
    if (this.state.clickedBook != book) {
      this.setState({ pageIndex: 0, clickedBook: book });
    }
    else {
      let current = this.state.pageIndex;
      let next = ++current % (this.state.clickedBook.pages.length + 1);
      this.setState({ pageIndex: next });
    }
    // if mobile view, scroll to top
    if (window.screen.width <= 700) {
      window.scrollTo(0,0);
    }
  }
  onCloseClick() {
    this.setState({ clickedBook: null });
  }
  render() {
    let books = bookList.map((book) => 
      <SmallBook book={book} onBookClick={this.onBookClick} onCloseClick={this.onCloseClick} selectedBook={this.state.clickedBook} key={book.id} />);

    return (
      <div className="main-container">
        <div className = "books">
          {books}
        </div>
        <Featured clickedBook={this.state.clickedBook}  onCloseClick={this.onCloseClick} onBookClick={this.onBookClick} pageIndex={this.state.pageIndex} />
      </div>
    );
  }
}

export default App;
