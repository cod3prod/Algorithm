function heapify(arr, length, i) {
    let largest = i; // 부모 노드
    let left = 2 * i + 1; // 왼쪽 자식 노드
    let right = 2 * i + 2; // 오른쪽 자식 노드

    // 왼쪽 자식이 더 크다면 largest 업데이트
    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    // 오른쪽 자식이 더 크다면 largest 업데이트
    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    // largest가 부모 노드가 아니라면 교체
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // swap
        heapify(arr, length, largest); // 재귀적으로 힙 구조 유지
    }
}

function heapSort(arr) {
    let length = arr.length;

    // 최대 힙 구성
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(arr, length, i);
    }

    // 요소를 하나씩 정렬
    for (let i = length - 1; i >= 0; i--) {
        // 루트(최대값)를 끝으로 이동
        [arr[0], arr[i]] = [arr[i], arr[0]]; // swap
        heapify(arr, i, 0); // 힙 구조 다시 유지
    }

    return arr;
}

// 사용 예시
const arr = [12, 11, 13, 5, 6, 7];
console.log("정렬 전: ", arr);
const sortedArr = heapSort(arr);
console.log("정렬 후: ", sortedArr);
