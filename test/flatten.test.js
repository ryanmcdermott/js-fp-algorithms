import { expect } from 'chai';
import flatten from '../flatten';

describe('flatten', function() {
	it('should flatten a deeply nested array', function() {
		const result = flatten([[1, 2, [3, 4]], [[[5, 6]]], 7, 8, [9]]);
		expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it('should flatten a non-nested array', function() {
		const result = flatten([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it('should flatten an empty array', function() {
		const result = flatten([]);
		expect(result).to.deep.equal([]);
	});
});
