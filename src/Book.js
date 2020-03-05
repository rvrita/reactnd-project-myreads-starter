import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Book extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      authors,
      imageUrl,
      category,
    } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{width: 128, height: 193, backgroundImage: imageUrl}}></div>
          <div className="book-shelf-changer">
            <select defaultValue={category}>
              <option value="move" disabled>Move to...</option>
              <option value={'CURRENTLY_READING'}>Currently Reading</option>
              <option value={'WANT_TO_READ'}>Want to Read</option>
              <option value={'HAS_BEEN_READ'}>Read</option>
              <option value={'NONE'}>None</option>
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