export default class InstallmentSchema {
  static schema = {
    name: 'Installment',
    primaryKey: 'id',
    properties: {
      id: 'string',
      total: 'double',
      dueAt: 'date',
      isPaid: 'bool',
      sale: { type: 'linkingObjects', objectType: 'Sale', property: 'installments' },
    }
  };
}
