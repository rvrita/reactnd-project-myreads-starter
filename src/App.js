import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


export const CURRENTLY_READING = 'CURRENTLY_READING';
export const WANT_TO_READ = 'WANT_TO_READ';
export const HAS_BEEN_READ = 'HAS_BEEN_READ';
export const NONE = 'NONE';
export const Shelves = [
  { title: 'Currently Reading', category: CURRENTLY_READING },
  { title: 'Want to Read', category: WANT_TO_READ },
  { title: 'Read', category: HAS_BEEN_READ },
//  { title: 'None', category: NONE },
];

class BooksApp extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.addBookToShelf = this.addBookToShelf.bind(this);
    this.removeBookFromShelf = this.removeBookFromShelf.bind(this);

    this.state = {
      books: [
        {
          category: CURRENTLY_READING,
          title: "My Fuzzy Life",
          authors: ["Captain Chili McGenius"],
          imageUrl: "https://www.dogbreedinfo.com/images27/YorkshireTerrierYorkieSonny5YearsOldPurebredDog1.JPG",
          id: "0001",
        },
        {
          category: CURRENTLY_READING,
          title: "Memoirs from Being Cute",
          authors: ["Captain Chili McGenius"],
          imageUrl: "https://www.dogbreedinfo.com/images27/YorkshireTerrierYorkieSonny5YearsOldPurebredDog1.JPG",
          id: "0002",
        },
        {
          category: CURRENTLY_READING,
          title: "How to Be Very Cute",
          authors: ["Captain Chili McGenius"],
          imageUrl: "https://www.dogbreedinfo.com/images27/YorkshireTerrierYorkieSonny5YearsOldPurebredDog1.JPG",
          id: "0003",
        },
      ],
    };
  }

  removeBookFromShelf(book, category) {
    return;
    let {shelves} = this.state;
    const i = shelves.findIndex(shelf => shelf.category === category);
    const j = shelves[i].books.indexOf(book);

    // Make a copy of the books array to avoid referential equality
    shelves[i].books = shelves[i].books.slice();

    // Remove the book
    shelves[i].books.splice(j, 1);

    // Make a copy of the shelves array to avoid referential equality
    shelves = shelves.slice();

    this.setState({shelves: shelves});
  }

  XaddBookToShelf(book, category) {
    let {shelves} = this.state;
    const i = shelves.findIndex(shelf => shelf.category === category);

    shelves[i].books = shelves[i].books.slice();

    // Add the book
    shelves[i].books.push(book);

    shelves = shelves.slice();

    this.setState({shelves: shelves});
  }

  addBookToShelf(book, category) {
    let {books} = this.state;

    // Modify the book
    // const i = books.indexOf(book);
    // books = books.slice();
    // books[i].category = category;

    const existingBook = books.find(b => b.id === book.id);
    if (existingBook) {
      existingBook.category = category;
    } else {
      books.push(book);
      book.category = category;
    }

    this.setState({books: books});
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <HomePage removeBookFromShelf={this.removeBookFromShelf}
                        addBookToShelf={this.addBookToShelf}
                        books={this.state.books}/>
            </Route>
            <Route path="/search">
              <SearchPage addBookToShelf={this.addBookToShelf} books={this.state.books}/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp;
