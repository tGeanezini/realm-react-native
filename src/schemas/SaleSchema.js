export default class SaleSchema {
  static schema = {
    name: 'Sale',
    primaryKey: 'id',
    properties: {
      id: { type: 'string', indexed: true },
      total: 'double',
      madeAt: 'date',
      isPaid: 'bool',
      installments: 'Installment[]',
      observation: { type: 'string', optional: true },
    }
  };
}
