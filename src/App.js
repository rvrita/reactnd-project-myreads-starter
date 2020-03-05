import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import {SearchPage} from "./SearchPage";
import {HomePage} from "./HomePage";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  constructor(props) {
    super(props);

    this.books = [
      {
        title: "My Fuzzy Life",
        category: "WANT_TO_READ",
        authors: ["Captain Chili McGenius"],
        imageUrl: "https://www.dogbreedinfo.com/images27/YorkshireTerrierYorkieSonny5YearsOldPurebredDog1.JPG",
      }
    ];

  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage onClick={() => this.setState({showSearchPage: false})}/>
        ) : (
          <HomePage onClick={() => this.setState({showSearchPage: true})}/>
        )}
      </div>
    )
  }
}

export default BooksApp
