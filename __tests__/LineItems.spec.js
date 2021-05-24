import React from 'react';
import LineItems from '../src/LineItems';
import { shallow } from '../enzyme';

describe("LineItems component", () => {
  test("it should return null if data prop is not present", () => {
    const comp = shallow(<LineItems />);

    expect(comp.type()).toEqual(null);
  });

  test("it should return null if data is not an array", () => {
    const comp = shallow(<LineItems data={{}} />);

    expect(comp.type()).toEqual(null);
  });
});
