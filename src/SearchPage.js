import React from "react";
import * as PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {search} from "./BooksAPI";
import Book from "./Book";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchKeyUp = this.handleSearchKeyUp.bind(this);
    this.state = {searchResults: []};
  }

  handleSearchKeyUp(event) {
    const value = event.target.value;

    if (value === '') {
      this.setState({searchResults: []});
      return;
    }

    console.log(value);

    // Search doesn't work for queries more than 1 character.
    // It says "error: empty query"
    search(value).then(books => {
      console.log(books);
      if (!Array.isArray(books)) {
        this.setState({searchResults: []});
      } else {
        this.setState({
          searchResults: books.map(book => ({
            title: book.title,
            authors: book.authors ? book.authors : [],
            imageUrl: book.imageLinks && book.imageLinks.thumbnail,
          })),
        });
      }
    });
  }

  render() {
    const books = this.state.searchResults;

    return <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => this.props.history.push("/")}>Close</button>
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input onKeyUp={this.handleSearchKeyUp} type="text" placeholder="Search by title or author"/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            books.map(book => (
              <li key={book.title + book.authors[0]}>
                <Book {...book} category={null} moveBookToCategory={(newCategory) => {
                  // this.props.removeBookFromShelf(book, category);
                  this.props.addBookToShelf(book, newCategory);
                }}/>
              </li>
            ))
          }
        </ol>
      </div>
    </div>;
  }
}

SearchPage.propTypes = {addBookToShelf: PropTypes.func};

export default withRouter(SearchPage);