import filterLines from '../src/utils/filterLines';
import lines from '../mockData/lines';

describe("filterLines function", () => {
  test("it should return three variants as a single variant", () => {
    const input = lines;

    expect(filterLines(input).length).toEqual(1);
  });
});
