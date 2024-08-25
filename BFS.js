function bfs(graph, start) {
    let queue = [start]; // 큐 초기화
    let visited = new Set(); // 방문한 노드를 추적
    let result = []; // 탐색 순서를 저장할 배열

    visited.add(start); // 시작 노드를 방문 처리

    while (queue.length > 0) {
        let node = queue.shift(); // 큐에서 노드를 꺼냄
        result.push(node); // 결과 배열에 추가

        // 그래프에서 인접 노드를 큐에 추가
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor); // 방문 처리
                queue.push(neighbor); // 큐에 추가
            }
        }
    }
    return result;
}

// 그래프를 인접 리스트 형태로 정의
let graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

// BFS 호출
console.log(bfs(graph, 'A'));
