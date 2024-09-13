class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node, weight) {
    this.heap.push({ node, weight });
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (parent.weight <= element.weight) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].weight < this.heap[smallest].weight
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].weight < this.heap[smallest].weight
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      let temp = this.heap[index];
      this.heap[index] = this.heap[smallest];
      this.heap[smallest] = temp;
      this.sinkDown(smallest);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function primsAlgorithm(graph) {
  const nodes = Object.keys(graph);
  const mst = [];
  const visited = new Set();
  const heap = new MinHeap();

  // Start from the first node in the graph
  heap.insert(nodes[0], 0);

  while (!heap.isEmpty()) {
    const { node, weight } = heap.extractMin();

    // Skip the node if it is already visited
    if (visited.has(node)) continue;

    visited.add(node);

    // Add to MST if not starting node
    if (weight !== 0) mst.push({ node, weight });

    // Add edges to heap
    for (let neighbor in graph[node]) {
      if (!visited.has(neighbor)) {
        heap.insert(neighbor, graph[node][neighbor]);
      }
    }
  }

  return mst;
}

// Example graph represented as an adjacency list
const graph = {
  A: { B: 1, D: 3, E: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { B: 2, D: 7 },
  D: { A: 3, B: 5, C: 7, E: 6 },
  E: { A: 4, D: 6 }
};

console.log(primsAlgorithm(graph));
