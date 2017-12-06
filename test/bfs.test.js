import { expect } from 'chai';
import bfs from '../bfs';

describe('dfs', function() {
  it('should find element in graph', function() {
    const start = 'A';
    const destination = 'F';

    const graph = {
      A: ['B', 'C'],
      B: ['D', 'E'],
      C: ['F'],
      D: [],
      E: ['F'],
      F: [],
    };

    const result = bfs(graph, start, destination);
    expect(result).to.deep.equal(['A', 'B', 'C', 'D', 'E', 'F']);
  });
});
