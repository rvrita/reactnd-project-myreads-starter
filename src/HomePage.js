import React from "react";
import Shelf from "./Shelf";
import * as PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {Shelves} from "./App";

class HomePage extends React.Component {
  render() {
    const {books, moveBookToCategory } = this.props;

    return <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {Shelves.map(shelf => <Shelf moveBookToCategory={moveBookToCategory}
                                     key={shelf.title}
                                     title={shelf.title}
                                     books={books.filter(book => book.category === shelf.category)}
                                     category={shelf.category}/>)}
      </div>
      <div className="open-search">
        <button onClick={() => this.props.history.push('/search')}>Add a book</button>
      </div>
    </div>;
  }
}

HomePage.propTypes = {
  books: PropTypes.array,
  moveBookToCategory: PropTypes.func,
};

export default withRouter(HomePage);