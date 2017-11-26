const quicksort = list => {
  const left = (x, xs) => xs.filter(val => val <= x);
  const right = (x, xs) => xs.filter(val => val > x);
  const sort = (x, xs) =>
    [].concat(quicksort(left(x, xs)), [x], quicksort(right(x, xs)));

  return !list.length ? [] : sort(list[0], list.slice(1));
};

export default quicksort;
