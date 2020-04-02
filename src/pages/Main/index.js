import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Title,
  Form,
  Input,
  Submit,
  List,
} from './styles';

import Repository from '../../components/Repository';
import api from '../../services/api';
import getRealm from '../../services/realm';

import Sale from '../../components/Sale';

export default function Main() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState([]);

  const [sales, setSales] = useState([]);
  let count = 0;

  useEffect(() => {
    // async function loadRepositories() {
    //   const realm = await getRealm();

    //   const data = realm.objects('Repository').sorted('stars', true);

    //   setRepositories(data);
    // }

    // loadRepositories();

    async function loadSales() {
      const realm = await getRealm();

      const data = realm.objects('Sale').sorted('madeAt', true);

      setSales(data);
    }

    loadSales();
  }, []);

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data, 'modified');
    });

    return data;
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`);

      await saveRepository(response.data);

      setInput('');
      setError(false);

      Keyboard.dismiss();
    } catch (err) {
      setError(true);
    }
  }

  async function addSale() {
    count++;

    const date = Date.now();

    const data = {
      id: count,
      total: 150.00,
      madeAt: new Date(date),
      isPaid: false,
      installments: [
        {
          id: count,
          total: 150.00,
          dueAt: new Date(date),
          isPaid: false,
        }
      ],
      observation: 'Teste de interface',
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Sale', data, 'modified');
    });
  }

  async function handleRefreshRepository(repository) {
    const response = await api.get(`/repos/${repository.fullName}`);

    const data = await saveRepository(response.data);

    setRepositories(repositories.map(repo => (repo.id === data.id ? data : repo)));
  }

  return (
    <Container>
      <Title>Vendas</Title>

      <Form>
        <Input
          value={input}
          error={error}
          onChangeText={setInput}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Procurar repositório' />
          <Submit onPress={addSale}>
            <Icon name='add' size={22} color='#0079db' />
          </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps='handled'
        data={sales}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Sale data={item} />
          // <Repository data={item} onRefresh={() => handleRefreshRepository(item)}/>
        )}
      />
    </Container>
  )
}
