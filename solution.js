const startNode = 2;
const graph = [
  [1, 2],
  [2, 3],
  [1, 3],
  [3, 4],
  [4, 2],
  [5, 6],
];

let N = 0;
let graphAdj = [];
let color = Array(N).fill(0);
let par = Array(N).fill(0);
let cycles = [];
let countCycle = 0;

const addEdge = (start, end) => {
  graphAdj[start].push(end);
};

const initialize = () => {
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (graph[i][j] > N) {
        N = graph[i][j];
      }
    }
  }
  for (let i = 0; i < N; i++) {
    graphAdj.push([]);
  }
  for (let i = 0; i < graph.length; i++) {
    addEdge(graph[i][0] - 1, graph[i][1] - 1);
  }
};

const findCycles = (u, p, color, par) => {
  if (color[u] == 1) {
    let v = [];
    let cur = p;
    v.push(cur + 1);
    while (cur != u) {
      cur = par[cur];
      v.push(cur + 1);
    }

    cycles[countCycle] = [...v.reverse(), u + 1];
    countCycle++;
    return;
  }

  par[u] = p;
  color[u] = 1;
  for (let v of graphAdj[u]) {
    findCycles(v, u, color, par);
  }
  color[u] = 2;
};

const sortCycles = () => {
  cycles.sort(function (a, b) {
    return a.length - b.length;
  });
};

const main = () => {
  initialize();
  findCycles(startNode - 1, 0, color, par);
  sortCycles();

  for (let i = 0; i < countCycle; i++) {
    console.log('Cycle Number ' + (i + 1) + ': ', cycles[i]);
  }
  return cycles;
};

main();
