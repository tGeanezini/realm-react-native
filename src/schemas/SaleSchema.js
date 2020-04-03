export default class SaleSchema {
  static schema = {
    name: 'Sale',
    primaryKey: 'id',
    properties: {
      id: 'string',
      total: 'double',
      madeAt: 'date',
      isPaid: 'bool',
      installments: 'Installment[]',
      observation: { type: 'string', optional: true },
    }
  };
}
