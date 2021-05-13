import React from 'react';
import PageHeader from './PageHeader';
import OrderHistoryItem from './OrderHistoryItem';

const OrderHistory = () => {
  return (
    <div className="columns is-multiline">
      <PageHeader title="Order History" />

      <OrderHistoryItem />
    </div>
  );
};

export default OrderHistory;
