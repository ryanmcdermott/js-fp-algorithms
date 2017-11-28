import { expect } from 'chai';
import fibonacci from '../fibonacci';

describe('fibonacci', function() {
  it('generate 30th fibonacci number', function() {
    const result = fibonacci(30);
    expect(result).to.deep.equal(1346269);
  });
});
