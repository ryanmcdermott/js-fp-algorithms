import { expect } from 'chai';
import quicksort from '../quicksort';

describe('quicksort', function() {
	it('should sort an array', function() {
		const result = quicksort([3, 8, 5, 2, 6, 9, 4, 1, 7]);
		expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it('should sort an empty array', function() {
		const result = quicksort([]);
		expect(result).to.deep.equal([]);
	});
});
