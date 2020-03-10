import React from "react";
import Shelf from "./Shelf";
import * as PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {Shelves} from "./App";

class HomePage extends React.Component {
  render() {
    const {books, moveBookToShelf } = this.props;

    return <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {Shelves.map(shelf => <Shelf moveBookToShelf={moveBookToShelf}
                                     key={shelf.id}
                                     title={shelf.title}
                                     books={books.filter(book => book.shelf === shelf.id)}
                                     shelf={shelf.id}/>)}
      </div>
      <div className="open-search">
        <button onClick={() => this.props.history.push('/search')}>Add a book</button>
      </div>
    </div>;
  }
}

HomePage.propTypes = {
  books: PropTypes.array,
  moveBookToShelf: PropTypes.func,
};

export default withRouter(HomePage);