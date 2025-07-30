function countOccurences(arr, target){
    const first = firstOccurrence(arr, target);
    if(first === -1) return 0;

    let last = first;
    while(last + 1 < arr.length && arr[last + 1] === target){
        last++;
    }
    return last - first + 1;
}


function firstOccurrence(arr, target) {
    let left = 0, right = arr.length - 1, result = -1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }

  console.log(firstOccurrence([2, 4, 4, 4, 5, 6], 4));

console.log(countOccurences([1,2,2,2,3,4,5], 2));