function mergeSort(arr) {
  // 배열의 길이가 1 이하일 경우 이미 정렬된 상태
  if (arr.length <= 1) {
    return arr;
  }

  // 배열을 반으로 나누기
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 각각의 부분 배열을 재귀적으로 정렬
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // 두 배열을 비교하며 병합
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;  // 왼쪽 배열의 다음 요소
    } else {
      result.push(right[rightIndex]);
      rightIndex++;  // 오른쪽 배열의 다음 요소
    }
  }

  // 남은 요소들을 병합
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
