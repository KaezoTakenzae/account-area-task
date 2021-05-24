import React, { useState, useEffect } from 'react';

import HistoryItem from './HistoryItem';

const HistoryItems = () => {
  const [ orders, setOrders ] = useState([]);

  useEffect(() => {
    fetch('https://reactasty.apps.huel.io/api/customer/orders')
      .then(response => {
        return response.json();
      })
      .then(response => {
        setOrders(response[0].orders);
      });
  }, []);
  return (
    <div>
      {orders.map((order, i) => (
        <HistoryItem key={i} item={order} />
      ))}
    </div>
  );
};

export default HistoryItems;
