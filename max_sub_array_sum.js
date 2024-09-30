function maxSubArray(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// 사용 예
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
