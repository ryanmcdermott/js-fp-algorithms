import { expect } from 'chai';
import dfs from '../dfs';

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

    const result = dfs(graph, start, destination);
    console.warn(result);
    //expect(result).to.equal(['A', 'B', 'E', 'F'], ['A', 'C', 'F']);
  });
});
