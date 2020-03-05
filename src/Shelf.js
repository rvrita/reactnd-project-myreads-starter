import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

export default class Shelf extends PureComponent {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {books, title} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map(book => (
                <li key={book.title}>
                  <Book {...book}/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}