import React from 'react';

const ShippingAddress = props => {
  let { address: { address1, city, zip } } = props
  return (
    <div className="is-flex order-footer-information">
      <div className="left-info">
        <div>Delivery Address</div>
        <div>{address1}, {city}, {zip}</div>
      </div>
    </div>
  );
};

export default ShippingAddress;
