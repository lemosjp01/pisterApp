import styled from 'styled-components';

export const StyledBookDetail = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: #ffdd0d;
  flex-direction: column;
`;

export const Title = styled.Text`
  margin-left: 42.47%;
  margin-right: 24.4%;
  margin-top: 12%;
  width: 200px;
  color: #2c2605;
  font-family: Roboto;
  font-size: 20px;
  text-align: center;
  border-bottom-width: 1px;
  padding-bottom: 20px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const Book = styled.View`
  width: 100px;
  height: 130px;
  margin: 15px 18px;
`;

export const Back = styled.View`
  flex-direction: column;
  width: 100%;
  height: 50px;
  background-color: #ffdd0d;
  align-items: flex-start;
  justify-content: center;
`;

export const DetailHeading = styled.View`
  height: 35%;
  background-color: #ffdd0d;
  flex-direction: row;
`;

export const Col = styled.View`
  flex-direction: column;
  width: auto;
  margin: 10px 10px 10px 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 242px;
  margin: 0 10px 0 10px;
`;

export const Author = styled.Text`
  font-weight: normal;
  font-size: 14px;
  margin-left: 12px;
`;

export const Pages = styled.Text`
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  margin: 25px 0 0 0;
`;

export const Price = styled.Text`
  font-weight: bold;
  line-height: 25px;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  color: #2c2605;
`;

export const BookTitle = styled.Text`
  margin-right: 10px;
  width: 225px;
  margin-left: 0px;
  margin-top: 5px;
  color: #2c2605;
  font-family: Roboto;
  font-size: 25px;
  text-align: left;
`;

export const Button = styled.Button`
  background-color: #4a90e2;
  border-radius: 550px;
  align-items: center;
  justify-content: center;
`;

export const Buttons = styled.View`
  margin: 10px;
  flex-direction: row;
`;

export const Description = styled.View`
  background-color: #fff;
  height: 56%;
  width: 100%;
  padding: 5px 10px 100px 10px;
  text-align: left;
`;

export const Content = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 30px;
  font-size: 14px;
  color: #4f565d;
`;

export const Arrow = styled.View`
  height: 20px;
  width: 25px;
  margin: 40px 0 0 10px;
`;

export const Container = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;
