export default function quicksort(sequence) {
	return empty_p(sequence) ? [] : sort(first(sequence), rest(sequence));

	function sort(x, xs) {
		return concat(quicksort(left(x, xs)), [x], quicksort(right(x, xs)));
	}

	function left(x, xs) {
		return xs.filter(function(val) {
			return val <= x;
		});
	}

	function right(x, xs) {
		return xs.filter(function(val) {
			return val > x;
		});
	}
}

// Helper functions
function slice(sequence) {
	return [].slice.call(sequence);
}

function empty_p(sequence) {
	return !sequence.length;
}

function concat() {
	return slice(arguments).reduce(function(acc, val) {
		return acc.concat(val);
	}, []);
}

function first(sequence) {
	return sequence[0];
}

function rest(sequence) {
	return sequence.slice(1);
}
