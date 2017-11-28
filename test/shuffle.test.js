import { expect } from 'chai';
import shuffle from '../shuffle';

describe('uniq', function() {
  it('should find unique values in list', function() {
    const result = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result).to.not.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
