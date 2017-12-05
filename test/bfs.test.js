import { expect } from 'chai';
import bfs from '../bfs';

describe('dfs', function() {
  it('should find element in graph', function() {
    const start = 'A';
    const destination = 'F';

    const graph = {
      A: ['B', 'C'],
      B: ['A', 'D', 'E'],
      C: ['A', 'F'],
      D: ['B'],
      E: ['B', 'F'],
      F: ['C', 'E'],
    };

    const result = bfs(graph, start, destination);
    expect(result).to.deep.equal([['A', 'B', 'E', 'F'], ['A', 'C', 'F']]);
  });
});
