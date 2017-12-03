import _ from 'lodash';

function* dfsHelper(graph, start, destination, path) {
  if (start === destination) yield path;

  const neighbors = _.difference(graph[start], path);

  for (let i = 0; i < neighbors.length; i++) {
    yield* dfsHelper(graph, neighbors[i], destination, [...path, neighbors[i]]);
  }
}

const dfs = (graph, start, destination) => {
  const paths = dfsHelper(graph, start, destination, [start]);
  return [...paths];
};

export default dfs;
