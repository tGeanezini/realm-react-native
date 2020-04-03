import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { uuid } from 'uuidv4';

import {
  Container,
  Title,
  Submit,
  SubmitText,
  List,
} from './styles';

import getRealm from '../../services/realm';

import Sale from '../../components/Sale';

export default function Main() {
  const [sales, setSales] = useState([]);

  useEffect(() => {

    async function loadSales() {
      const realm = await getRealm();

      const data = realm.objects('Sale').sorted('madeAt', true);

      setSales(data);
    }

    loadSales();
  }, []);

  async function addSale() {
    const date = Date.now();

    const data = {
      id: uuid(),
      total: 139.99,
      madeAt: new Date(date),
      isPaid: true,
      installments: [
        {
          id: uuid(),
          total: 139.99,
          dueAt: new Date(date),
          isPaid: true,
        },
      ],
      observation: 'Teste de interface',
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Sale', data, 'modified');
    });

    return data;
  }

  async function deleteSale(data) {
    const realm = await getRealm();

    realm.write(() => {
      let sale = realm.objects('Sale').filtered('id == "'+data.id+'"');
      let installments = sale[0].installments;
      realm.delete(installments);
      realm.delete(sale);
    });
  }

  return (
    <Container>
      <Title>Vendas</Title>

      <Submit onPress={addSale}>
        <SubmitText>Adicionar Venda</SubmitText>
        <Icon name='add' size={22} color='#0079db' />
      </Submit>

      <List
        keyboardShouldPersistTaps='handled'
        data={sales}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Sale data={item} onDelete={() => deleteSale(item)}/>
        )}
      />
    </Container>
  )
}
