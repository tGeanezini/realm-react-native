import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Total,
  Title,
  Value,
  SaleDate,
  Installments,
  Details,
  DetailsText
} from './styles';

export default function Sale({ data, showDetail }) {
  return (
    <Container>
      <Total>
        <Title>Valor</Title>
        <Value>{data.total}</Value>
      </Total>
      <SaleDate>
        <Title>Data da venda</Title>
        <Value>{data.madeAt.toDateString()}</Value>
      </SaleDate>
      <Installments>
        <Title>Número de Parcelas</Title>
        <Value>{data.installments.length}</Value>
      </Installments>
      <Details onPress={showDetail}>
        <DetailsText>Ver detalhes</DetailsText>
        <Icon name='arrow-right' color='#0079db' size={16} />
      </Details>
    </Container>
  )
}
