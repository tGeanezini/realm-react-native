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
  DetailsText,
  Status,
} from './styles';

export default function Sale({ data, onDelete }) {
  const total = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(data.total);

  const date = Intl.DateTimeFormat('pt-BR').format(data.madeAt);

  return (
    <Container>
      <Total>
        <Title>Valor</Title>
        <Value>{total}</Value>
      </Total>
      <SaleDate>
        <Title>Data da venda</Title>
        <Value>{date}</Value>
      </SaleDate>
      <Installments>
        <Title>Número de Parcelas</Title>
        <Value>{data.installments.length}</Value>
      </Installments>
      <Status>
        <Title>Status</Title>
        {data.isPaid ? <Value>PAGO</Value> : <Value>EM ABERTO</Value>}
      </Status>

      <Details onPress={onDelete}>
        <DetailsText>Excluir</DetailsText>
        <Icon name='trash' color='#ff4040' size={18} />
      </Details>
    </Container>
  )
}
