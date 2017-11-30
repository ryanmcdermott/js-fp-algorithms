import _ from 'lodash';

const dfsHelper = (graph, start, destination, path, paths) => {
  // This is mutative, should use yield and yield * ideally
  if (start === destination) return paths.push(path);

  _.difference(graph[start], path).map(vertex => {
    dfsHelper(graph, vertex, destination, [...path, vertex], paths);
  });

  return paths;
};

const dfs = (graph, start, destination) => {
  return dfsHelper(graph, start, destination, [start], []);
};

export default dfs;
