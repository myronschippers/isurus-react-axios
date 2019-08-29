import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// reactRedux.connect
// React.Component

import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

import './App.css';


class App extends Component {

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios.get('/books')
      .then((response) => {
        const bookList = response.data;
        const action = {
          type: 'SET_BOOK_LIST',
          payload: bookList
        }
        this.props.dispatch(action);
        console.log(response);
      })
      .catch((err) => {
        console.log('GET Error: ', err);
        alert('There was an error getting your books.');
      });

  }

  render() {
    return (
        <div className="App">
          <header><h1>Books w/ Redux!</h1></header>
          <main>
            <BookForm getBooks={this.getBooks} />
            <BookList />
          </main>
        </div>
    );
  }
}

export default connect()(App);
