function findFirstEvenNumber(arr){
    for (let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            return arr[i];
        }
    }
    return null;
}

console.log(findFirstEven([1, 3, 7, 8, 5]));