const uniqHelper = (list, index, memo, result = []) => {
  if (index === list.length) return result;

  if (!memo[list[index]]) {
    return uniqHelper(
      list,
      index + 1,
      Object.assign({}, memo, { [list[index]]: true }),
      [...result, list[index]]
    );
  }

  return uniqHelper(list, index + 1, memo, result);
};

const uniq = list => uniqHelper(list, 0, {});

export default uniq;
