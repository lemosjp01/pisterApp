/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import axios from 'axios';
import BookList from './src/components/BookList/BookList';
import BookDetail from './src/components/BookDetail/BookDetail';

const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=all'

const BooksContext = React.createContext({
  allBooks: null,
  bookId: null,
})

export default class App extends Component {
  state = {
    allBooks: null,
    redirectUrl: null,
    bookId: null,
  };

  handleDetail = (id) => {
    return this.setState({ bookId: id })
  };

  backTolist = () => {
    return this.setState({ bookId: null })
  };

  componentWillMount = () => {
    axios
      .get(`${API_URL}`)
      .then(res =>
        this.setState({
          allBooks: res.data.items,
        })
      )
      .catch();
  };

  render() {

    const value = {
      ...this.state,
    };

    return (
      <>
        <BooksContext.Provider value={value}>
          <BooksContext.Consumer>
            {({ allBooks, bookId }) => (
                <NativeRouter>
                <>
                  <StatusBar backgroundColor="#FFDD0D" />
                  <Route exact path="/" render={(props) => <BookList {...{ allBooks, bookId }} handleDetail={this.handleDetail} />} />
                  <Route path="/book" render={(props) => <BookDetail {...{ allBooks, bookId }} backTolist={this.backTolist} />} />
                </>
              </NativeRouter>
            )}
          </BooksContext.Consumer>
        </BooksContext.Provider>
      </>
    );
  }
}
