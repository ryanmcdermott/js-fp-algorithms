const flatten = list => {
	return list.reduce((acc, item) => {
		return acc.concat(Array.isArray(item) ? flatten(item) : item);
	}, []);
};

export default flatten;
