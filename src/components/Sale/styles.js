import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;
`;

export const Total = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Value = styled.Text`
  color: #666;
  margin-left: 8px;
  font-size: 18px;
`;

export const SaleDate = styled.View`
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
`;

export const Details = styled.TouchableOpacity`
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
`;

export const DetailsText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ff4040;
  margin-right: 5px;
`;

export const Installments = styled.View`
flex-direction: row;
margin-top: 15px;
align-items: center;
`;

export const Status = styled.View`
flex-direction: row;
margin-top: 15px;
align-items: center;
`;
