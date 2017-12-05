const bfs = (graph, start, destination) => {
  const paths = bfsHelper(graph, start, destination, [start]);
  return [...paths];
};

export default bfs;
