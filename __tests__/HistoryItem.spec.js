import React from 'react';
import HistoryItem from '../src/HistoryItem';
import { render } from '../enzyme';

const historyItem = {
  name: '#467614-US',
  total_price: '$113.86',
  processed_at: '2019-08-07T04:39:42-05:00',
  delivered: true,
  is_subscription: false,
  line_items: [],
  shipping_address: {}
}

const historyItemNeg = {
  ...historyItem,
  delivered: false,
  is_subscription: true
}

describe("HistoryItem component", () => {
  test("it shows Delivered when delivered is true", () => {
    const comp = render(<HistoryItem item={historyItem} />);

    expect(comp.find('#dispatchedMessage').text()).toEqual('It\'s been dispatched!');
  });

  test("it shows Awaiting Dispatch when delivered is false", () => {
    const comp = render(<HistoryItem item={historyItemNeg} />);

    expect(comp.find('#dispatchedMessage').text()).toEqual('Awaiting Dispatch');
  });

  test("it shows Order Type One Time when subscription is false", () => {
    const comp = render(<HistoryItem item={historyItem} />);

    expect(comp.find('.is-onetime').text()).toEqual('One-time');
  });

  test("it shows Order Type Subscription when subscription is true", () => {
    const comp = render(<HistoryItem item={historyItemNeg} />);

    expect(comp.find('.is-onetime').text()).toEqual('Subscription');
  });
});
