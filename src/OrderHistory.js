import React from 'react';
import PageHeader from './PageHeader';
import HistoryItems from './HistoryItems';

const OrderHistory = () => {
  return (
    <div className="columns is-multiline">
      <PageHeader title="Order History" />

      <HistoryItems />
    </div>
  );
};

export default OrderHistory;
