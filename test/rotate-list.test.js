import { expect } from 'chai';
import rotateList from '../rotate-list';

describe('rotateList', function() {
	it('should rotate a list k steps', function() {
		const result = rotateList([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
		expect(result).to.deep.equal([4, 5, 6, 7, 8, 9, 1, 2, 3]);
	});

	it('should rotate a list completely', function() {
		const result = rotateList([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);
		expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it('should rotate an empty list', function() {
		const result = rotateList([]);
		expect(result).to.deep.equal([]);
	});
});
