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
  {title: 'Currently Reading', category: CURRENTLY_READING},
  {title: 'Want to Read', category: WANT_TO_READ},
  {title: 'Read', category: HAS_BEEN_READ},
];

class BooksApp extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.moveBookToCategory = this.moveBookToCategory.bind(this);

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

  moveBookToCategory(book, category) {
    let {books} = this.state;

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
              <HomePage moveBookToCategory={this.moveBookToCategory} books={this.state.books}/>
            </Route>
            <Route path="/search">
              <SearchPage moveBookToCategory={this.moveBookToCategory} books={this.state.books}/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp;
