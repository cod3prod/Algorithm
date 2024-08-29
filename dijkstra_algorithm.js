class Graph {
    constructor(vertices) {
        this.V = vertices; // 정점의 수
        this.adjList = new Map(); // 인접 리스트
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w, weight) {
        this.adjList.get(v).push({ node: w, weight });
        this.adjList.get(w).push({ node: v, weight }); // 무방향 그래프
    }

    dijkstra(start) {
        const distances = {};
        const pq = new PriorityQueue();

        // 초기화
        this.adjList.forEach((_, vertex) => {
            distances[vertex] = Infinity;
        });
        distances[start] = 0;
        pq.enqueue(start, 0);

        while (!pq.isEmpty()) {
            const { element: u } = pq.dequeue();
            const neighbors = this.adjList.get(u);

            for (let neighbor of neighbors) {
                const { node: v, weight } = neighbor;
                const alt = distances[u] + weight;

                if (alt < distances[v]) {
                    distances[v] = alt;
                    pq.enqueue(v, alt);
                }
            }
        }

        return distances;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// 사용 예제
const g = new Graph(5);
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);

g.addEdge(0, 1, 10);
g.addEdge(0, 4, 3);
g.addEdge(1, 2, 2);
g.addEdge(1, 4, 4);
g.addEdge(2, 3, 9);
g.addEdge(3, 4, 7);

const distances = g.dijkstra(0);
console.log(distances);
