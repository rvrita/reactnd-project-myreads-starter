import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class BooksApp extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.addBookToShelf = this.addBookToShelf.bind(this);
    this.removeBookFromShelf = this.removeBookFromShelf.bind(this);

    this.state = {
      shelves: [
        {
          title: 'Currently Reading',
          category: 'CURRENTLY_READING',
          books: [
            {
              title: "My Fuzzy Life",
              authors: ["Captain Chili McGenius"],
              imageUrl: "https://www.dogbreedinfo.com/images27/YorkshireTerrierYorkieSonny5YearsOldPurebredDog1.JPG",
            },
            {
              title: "Memoirs from Being Cute",
              authors: ["Captain Chili McGenius"],
              imageUrl: "https://www.dogbreedinfo.com/images27/YorkshireTerrierYorkieSonny5YearsOldPurebredDog1.JPG",
            },
            {
              title: "How to Be Very Cute",
              authors: ["Captain Chili McGenius"],
              imageUrl: "https://www.dogbreedinfo.com/images27/YorkshireTerrierYorkieSonny5YearsOldPurebredDog1.JPG",
            },
          ],
        },
        {
          title: 'Want to Read',
          category: 'WANT_TO_READ',
          books: [],
        },
        {
          title: "Read",
          category: 'HAS_BEEN_READ',
          books: [],
        },
      ]
    };
  }

  removeBookFromShelf(book, category) {
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

  addBookToShelf(book, category) {
    let {shelves} = this.state;
    const i = shelves.findIndex(shelf => shelf.category === category);

    shelves[i].books = shelves[i].books.slice();

    // Add the book
    shelves[i].books.push(book);

    shelves = shelves.slice();

    this.setState({shelves: shelves});
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <HomePage removeBookFromShelf={this.removeBookFromShelf}
                        addBookToShelf={this.addBookToShelf}
                        shelves={this.state.shelves}/>
            </Route>
            <Route path="/search">
              <SearchPage addBookToShelf={this.addBookToShelf}/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp
