import { expect } from 'chai';
import binarySearch from '../binary-search';

describe('binarySearch', function() {
  it('should find index of element of sorted array', function() {
    const result = binarySearch(7, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
    expect(result).to.equal(3);
  });
});
