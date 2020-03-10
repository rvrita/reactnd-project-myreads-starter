# MyReads Project

### Component Hierarchy

The component hierarchy for the project looks like this:

```
App.js [S]
├── HomePage.js
│   └── Shelf.js
│       └── Book.js
└── SearchPage.js [S]
    └── Book.js
```

Components marked with `[S]` make API calls and maintain some internal state. 

In order to show the current shelf of books in the SearchPage, the SearchPage component receives the `books` array from the App component. This array contains all the books that appear on any shelf.

For each book in search results, we find any matching book in the `books` collection and get the existing `shelf` property.
```
  searchResults: books.map(book => ({
    title: book.title,
    ...
    shelf: this.props.books.find(b => b.id === book.id)?.shelf || NONE,
  })),
```

The `react-scripts` package is updated to version 3.4.0 in order to take advantage of optional chaining syntax.

## Development

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
