import Realm from 'realm';

import RepositorySchema from '../schemas/RepositorySchema';
import SaleSchema from '../schemas/SaleSchema';
import InstallmentSchema from '../schemas/InstallmentSchema';

// Abre conexão com o banco de dados
export default function getRealm() {
  return Realm.open({
    schema: [RepositorySchema, SaleSchema, InstallmentSchema],
  });
}
