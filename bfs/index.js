const bfsHelper = (
  graph,
  start,
  destination,
  queue,
  visited = [],
  path = []
) => {
  if (!queue.length) return false;
  if (start === destination) return [...path];

  const neighbors = graph[start].filter(vertex => !visited.includes(vertex));
  const newQueue = [...queue].slice(1).concat(neighbors);
  return bfsHelper(
    graph,
    newQueue[0],
    destination,
    newQueue,
    [...visited, newQueue[0]],
    [...path, newQueue[0]]
  );
};

const bfs = (graph, start, destination) => {
  const paths = bfsHelper(graph, start, destination, [start], [start], [start]);
  return paths;
};

export default bfs;
