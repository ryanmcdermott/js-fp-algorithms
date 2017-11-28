import _ from 'lodash';

const swap = (list, i, j) => {
  list = list.slice();
  [list[i], list[j]] = [list[j], list[i]];
  return list;
};

const shuffleHelper = (list, left) => {
  if (left === list.length) return list;

  return shuffleHelper(
    swap(list, left, _.random(left, list.length - 1)),
    left + 1
  );
};

const shuffle = list => shuffleHelper(list, 0);

export default shuffle;
