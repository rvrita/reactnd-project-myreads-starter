import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CURRENTLY_READING, HAS_BEEN_READ, NONE, WANT_TO_READ} from "./App";

class Book extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
    shelf: PropTypes.string,
    moveToShelf: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.handleShelfChange = this.handleShelfChange.bind(this);
  }

  handleShelfChange(event) {
    const shelf = event.target.value;
    this.props.moveToShelf(shelf);
  }

  render() {
    const {
      title,
      authors,
      imageUrl,
      shelf,
    } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{width: 128, height: 193, backgroundSize: 'cover', backgroundImage: `url(${imageUrl})`}}></div>
          <div className="book-shelf-changer">
            <select onChange={this.handleShelfChange} defaultValue={shelf}>
              <option value="move" disabled>Move to...</option>
              <option value={CURRENTLY_READING}>Currently Reading</option>
              <option value={WANT_TO_READ}>Want to Read</option>
              <option value={HAS_BEEN_READ}>Read</option>
              <option value={NONE}>None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(', ')}</div>
      </div>
    );
  }
}

export default Book;