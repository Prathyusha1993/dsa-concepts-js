function findAllIndices(arr, target) {
    const indices = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            indices.push(i);
        }
    }
    return indices.length > 0 ? indices : -1;
}

console.log(findAllIndices([-5, 2,4,6,8,10, 12], 2));
console.log(findAllIndices([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 5]
console.log(findAllIndices([5, 6, 7], 8));