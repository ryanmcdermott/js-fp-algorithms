import _ from 'lodash';

let list = ['a', 'a', 'a', 'a', 'b', 'b', 'c', 'c', 'c', 'd'];

let runLength = (l, result) => {
	if (!l.length) return result;
	return runLength(
		_.dropWhile(l, item => item == l[0]),
		result.concat(
			l[0] + (l.length - _.dropWhile(l, item => item == l[0]).length)
		)
	);
};

let result = runLength(list, []);
console.log(result);
