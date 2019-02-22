import styled from 'styled-components';

export const Books = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: #ffdd0d;
  flex-direction: column;
`;

export const StyledListBook = styled.View`
  display: flex;
  flex: 8;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Book = styled.View`
  width: 100px;
  height: 130px;
  margin: 15px 18px;
`;

export const Title = styled.Text`
  margin-left: 35%;
  margin-right: 22.47%;
  margin-top: 7%;
  color: #2c2605;
  font-family: Roboto;
  font-size: 20px;
  text-align: center;
  border-bottom-width: 1px;
  padding-bottom: 20px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  margin: 0 10px 0 10px;
`;

export const Search = styled.View`
  height: 30px;
  width: 30px;
  margin: 30px 0 0 0;
`;

export const Input = styled.TextInput`
  border: 1px solid #000;
  height: 40px;
  width: 85%;
  background-color: #ffdd0d;
  border-radius: 150px;
  margin: 25px 10px 0 0;
`;
