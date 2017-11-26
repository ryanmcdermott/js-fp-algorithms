import _ from 'lodash';

// More efficient if using Immutable arrays
function swap(list, i, j) {
  list = list.slice();
  [list[i], list[j]] = [list[j], list[i]];
  return list;
}

const bubbleSortHelper = (list, pointer) => {
  if (pointer === 0) return list;

  _.range(0, pointer).map(i => {
    if (list[i] > list[i + 1]) {
      list = swap(list, i, i + 1);
    }
  });

  return bubbleSortHelper(list, pointer - 1);
};

const bubbleSort = list =>
  bubbleSortHelper(list, list.length ? list.length - 1 : 0);

export default bubbleSort;
