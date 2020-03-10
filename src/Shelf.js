import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

export default class Shelf extends PureComponent {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    moveBookToShelf: PropTypes.func,
  };

  render() {
    const {books, title, moveBookToShelf} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map(book => (
                <li key={book.id}>
                  <Book {...book} moveToShelf={shelf => moveBookToShelf(book, shelf)}/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}