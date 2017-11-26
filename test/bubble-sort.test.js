import { expect } from 'chai';
import bubbleSort from '../bubble-sort';

describe('bubbleSort', function() {
  it('should sort an array', function() {
    const result = bubbleSort([3, 8, 5, 2, 6, 9, 4, 1, 7]);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should sort an empty array', function() {
    const result = bubbleSort([]);
    expect(result).to.deep.equal([]);
  });
});
