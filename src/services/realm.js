import Realm from 'realm';

import RepositorySchema from '../schemas/RepositorySchema';

// Abre conexão com o banco de dados
export default function getRealm() {
  return Realm.open({
    schema: [RepositorySchema],
  });
}
