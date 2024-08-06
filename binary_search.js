// arr is in ascending order
function binarySearch(arr, target){
    if (arr.length===0) return -1;

    let left = 0;
    let right = arr.length - 1;

    while(right>= left){
        let mid = Math.floor(left + (right - left) / 2);

        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] > target) {
            right = mid - 1;
        }
        else{
            left = mid +1;
        }
    }

    return -1;
}
