import React, { Component } from 'React';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyledListBook, Book, Books, Title, Search, Row, Input} from './styled'
import { Image, TouchableOpacity } from 'react-native'



class BookList extends Component{
    state = {
        redirectUrl: null,
        bookId: null,
        showInput: false,
        term: '',
        value: null,
    }

    handleSearch = () => {
        return this.setState({showInput: !this.state.showInput})
    }

    searchingFor = (term) => {
        return (x) => {
          return x.volumeInfo.title.includes(term) || !term;
        };
    }

    render() {
        const { allBooks, handleDetail, bookId } = this.props;
        console.log(this.props)
        return (
            
              <Books>
                <Row>
                    {!this.state.showInput ? (<Title>Pixter Books</Title>) : (<Input onChangeText={(text) => this.setState({term: text})} />)}
                        
                    <Search>
                        <TouchableOpacity onPress={this.handleSearch}>
                            <Icon name="search" size={22} color="#000" />
                        </TouchableOpacity>
                    </Search>
                    
                    </Row>
                <StyledListBook>
                    {bookId == null && this.state.term == '' && allBooks !== null ? (allBooks && allBooks.map((book, index) =>
                        <Book>
                            <Link to={'/book'} onPress={() => handleDetail(index)}>
                                <Image source={{ uri: book.volumeInfo.imageLinks.smallThumbnail }} style={{ width: 100, height: 130 }} />
                            </Link>
                        </Book>)) : null}
                        {bookId == null && this.state.showInput && allBooks.filter(this.searchingFor(this.state.term)).map((book, index) =>
                        <Book>
                            <Link to={'/book'} onPress={() => handleDetail(index)}>
                                <Image source={{ uri: book.volumeInfo.imageLinks.smallThumbnail }} style={{ width: 100, height: 130 }} />
                            </Link>
                        </Book>)}
                </StyledListBook>
              </Books>
        )
    }
}

export default BookList