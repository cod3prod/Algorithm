// 그래프를 인접 리스트 형태로 표현
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

// DFS 함수 정의
function dfs(graph, start, visited = new Set()) {
  // 현재 노드를 방문 처리
  visited.add(start);
  console.log(start); // 방문한 노드를 출력

  // 현재 노드의 인접 노드를 재귀적으로 탐색
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// DFS 호출
dfs(graph, 'A');
