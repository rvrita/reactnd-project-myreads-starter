import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BooksAPI from "./BooksAPI";


export const CURRENTLY_READING = 'currentlyReading';
export const WANT_TO_READ = 'wantToRead';
export const HAS_BEEN_READ = 'read';
export const NONE = 'none';
export const Shelves = [
  {title: 'Currently Reading', id: CURRENTLY_READING},
  {title: 'Want to Read', id: WANT_TO_READ},
  {title: 'Read', id: HAS_BEEN_READ},
];

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.moveBookToShelf = this.moveBookToShelf.bind(this);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    // fetch all books
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({
        books: books.map(book => ({
          title: book.title,
          authors: book.authors || [],
          imageUrl: book.imageLinks?.thumbnail,
          shelf: book.shelf,
          id: book.id,
        }))
      });
    });
  }

  moveBookToShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(response => {
      let {books} = this.state;

      const existingBook = books.find(b => b.id === book.id);
      if (existingBook) {
        existingBook.shelf = shelf;
      } else {
        books.push(book);
        book.shelf = shelf;
      }

      this.setState({books: books});
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <HomePage moveBookToShelf={this.moveBookToShelf} books={this.state.books}/>
            </Route>
            <Route path="/search">
              <SearchPage moveBookToShelf={this.moveBookToShelf} books={this.state.books}/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp;
