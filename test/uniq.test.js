import { expect } from 'chai';
import uniq from '../uniq';

describe('uniq', function() {
  it('should find unique values in list', function() {
    const result = uniq([1, 2, 1, 3, 1, 2, 2, 3, 3, 4, 1]);
    expect(result).to.deep.equal([1, 2, 3, 4]);
  });
});
