import formatDate from '../src/utils/formatDate';

describe("formatDate function", () => {
  test("it should format a date as [Month] [Date] [Year]", () => {
    const input = '2019-08-07T04:39:42-05:00';

    const output = 'August 7th 2019';

    expect(formatDate(input)).toEqual(output);
  });

  test("it should return user friendly information if input is bad", () => {
    const input = '';

    const output = 'Not yet dispatched';

    expect(formatDate(input)).toEqual(output);
  });
});
