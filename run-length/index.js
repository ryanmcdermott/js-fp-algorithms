import _ from 'lodash';

const runLength = (l, result = []) => {
  if (!l.length) return result;
  return runLength(
    _.dropWhile(l, item => item == l[0]),
    result.concat(
      l[0] + (l.length - _.dropWhile(l, item => item == l[0]).length)
    )
  );
};

export default runLength;
