function findMinimumElement(arr){
    let minimum = arr[0];
    for(let i=1; i < arr.length; i++){
        if(arr[i] < minimum){
            minimum = arr[i]
        }
    }
    return minimum;
}

console.log(findMinimumElement([10, 4, 6, 2, -5]));