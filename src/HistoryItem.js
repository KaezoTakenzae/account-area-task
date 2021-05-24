import React from 'react';

import LineItems from './LineItems';
import ShippingAddress from './ShippingAddress';

import formatDate from './utils/formatDate';

const HistoryItem = props => {
  let { item: {
    name,
    total_price,
    processed_at,
    delivered,
    line_items,
    shipping_address,
    is_subscription
  } } = props;
  let dispatchDate = formatDate(processed_at);
  return (
    <div className="column is-12">
      <div className="box orders-history-block has-shadow-hover">
        <div className="is-flex orders-block-header">
          <div className="item">
            <div>Order Number</div>
            <div>{name}</div>
          </div>

          <div className="item">
            <div>Order Type</div>
            <div>
              <p className="is-onetime">{is_subscription ? 'Subscription' : 'One-time'}</p>
            </div>
          </div>
          <div className="item">
            <div>Price</div>
            <div>${total_price}</div>
          </div>
          <div className="item">
            <div>Dispatch Date</div>
            <div>{dispatchDate}</div>
          </div>
        </div>

        <hr />

        <div className="order-information">
          <p id='dispatchedMessage' className="title is-6 is-marginless">
            { delivered ? 'It\'s been dispatched!' : 'Awaiting Dispatch'}
          </p>

          <div>
            <div className="order-information-expanded">
              <div className="product-list-boxes columns is-multiline">
                <LineItems data={line_items} />
              </div>
              <hr />
              <ShippingAddress address={shipping_address} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
