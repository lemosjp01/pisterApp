import React, { Component } from 'react';
import { Image, WebView } from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import { StyledBookDetail, Title, DetailHeading, BookTitle, Col, Author, Price, Row, Pages, Description, Button, Buttons, Back, Content, Arrow, Container} from './styled'

class BookDetail extends Component {

  state = {
    redirectUrl: null,
    redirect: false,
  }

  handleButtonLink = (link) => {
    return this.setState({redirectUrl: link, redirect: true}) 
  }

  render() {
    const { allBooks, bookId, backTolist } = this.props;

    if (this.state.redirect && this.state.redirectUrl) {
      return (
        <>
          <Link to={'/book'} onPress={() => this.setState({ redirect: false })}>
            <Back>
              <Icon name="arrow-left" size={26} color="#fff" />
            </Back>
          </Link>
          <WebView
            source={{uri: this.state.redirectUrl}}
            style={{ flex: 1}}
          />
        </>
      )
    }

    return (
      <StyledBookDetail>
        <Row>
          <Link to={'/'} onPress={() => backTolist()}>
            <Arrow>
              <Image source={require('../../assets/images/arrowb.png')} />
            </Arrow>
          </Link>
          <Title>Pixter Books</Title>
        </Row>
        
          <Container>
            <DetailHeading>
              <>
                <Col>
                  <Image source={{uri: allBooks[bookId].volumeInfo.imageLinks.smallThumbnail}} style={{width: 100, height: 130}} />
                    <Pages>{allBooks[bookId].volumeInfo.pageCount} pages</Pages>
                </Col>
                <Col>
                  <BookTitle>{allBooks[bookId].volumeInfo.title}</BookTitle>
                  <BookTitle>{allBooks[bookId].volumeInfo.subtitle}</BookTitle>
                  <Author>by {allBooks[bookId].volumeInfo.authors.map(author => author)}</Author>
                  <Row>
                  {allBooks[bookId].saleInfo.saleability == 'FOR_SALE' ? (<Price>$ {allBooks[bookId].saleInfo.listPrice.amount}</Price>) : (<Price>{allBooks[bookId].saleInfo.saleability}</Price>)}
                    <StarRating disabled={false} emptyStar={'ios-star-outline'} fullStar={'ios-star'} halfStar={'ios-star-half'} starSize={20} iconSet='Ionicons' maxStars={5} rating={allBooks[bookId].volumeInfo.averageRating} fullStarColor={'black'} />
                  </Row> 
                  <Buttons>
                  {allBooks[bookId].saleInfo.saleability == 'FOR_SALE' ? (
                    <Button title={'BUY'} onPress={() => this.handleButtonLink(allBooks[bookId].saleInfo.buyLink)} />) : (<Button title={'DOWNLOAD'} onPress={() => this.handleButtonLink(allBooks[bookId].accessInfo.webReaderLink)} />)}
                  </Buttons>
                </Col>
              </>
          </DetailHeading>
          <Description>
            {allBooks[bookId].volumeInfo.description && <Content>{allBooks[bookId].volumeInfo.description}</Content>}
          </Description>
          </Container>
      </StyledBookDetail>
    );
  }
}

export default BookDetail;
