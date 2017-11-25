const binarySearchHelper = (needle, haystack, low, mid, high) => {
	if (low > high) return -1;

	if (haystack[mid] < needle) {
		return binarySearchHelper(
			needle,
			haystack,
			mid + 1,
			Math.floor((mid + 1 + high) / 2),
			high
		);
	} else if (haystack[mid] > needle) {
		return binarySearchHelper(
			needle,
			haystack,
			low,
			Math.floor((mid - 1 + low) / 2),
			mid - 1
		);
	} else {
		return mid;
	}
};

const binarySearch = (needle, haystack) => {
	return binarySearchHelper(
		needle,
		haystack,
		0,
		Math.floor((haystack.length - 1) / 2),
		haystack.length - 1
	);
};

export default binarySearch;
