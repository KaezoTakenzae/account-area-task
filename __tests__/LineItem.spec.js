import React from 'react';
import LineItem from '../src/LineItem';
import { render } from '../enzyme';

const lineItem = {
  title: 'Huel Powder',
  quantityInfo: '1x Berry, 1x Vanilla, 1x Chocolate',
  image: '',
  price: 99
}

describe("LineItem component", () => {
  test("Price should display to two decimal points", () => {
    const wrapper = render(<LineItem item={lineItem} />);

    expect(wrapper.find('.product-price')).toBeDefined();
    expect(wrapper.find('.product-price').text()).toEqual('$99.00');
  });
});
