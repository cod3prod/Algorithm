class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // 노드 추가
    addNode(node) {
        if (!this.adjacencyList[node]) {
            this.adjacencyList[node] = [];
        }
    }

    // 간선 추가
    addEdge(node1, node2) {
        if (!this.adjacencyList[node1]) {
            this.addNode(node1);
        }
        if (!this.adjacencyList[node2]) {
            this.addNode(node2);
        }
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1); // 무향 그래프
    }

    // 그래프 출력
    printGraph() {
        for (let node in this.adjacencyList) {
            console.log(`${node} -> ${this.adjacencyList[node].join(', ')}`);
        }
    }
}

// 사용 예제
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.printGraph();
