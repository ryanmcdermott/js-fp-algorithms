import { expect } from 'chai';
import runLength from '../run-length';

describe('rotateList', function() {
  it('should get run length of list', function() {
    const result = runLength([
      'a',
      'a',
      'a',
      'a',
      'b',
      'b',
      'c',
      'c',
      'c',
      'd',
    ]);
    expect(result).to.deep.equal(['a4', 'b2', 'c3', 'd1']);
  });

  it('should get run length of empty list', function() {
    const result = runLength([]);
    expect(result).to.deep.equal([]);
  });
});
