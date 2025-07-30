
const arr = [1,2,3, 'pinky'];
console.log(arr[0]);
console.log(arr[2]);

arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for(const item of arr){
    console.log(item)
}

// map,filter, reduce,splice, slice

// Array -Big-O tiime complexity:
/*
Insert / rmeove from end: O(1)
Inser /  remove from begining - O(n)
Access - O(1)
Search - O(n)
push/pop - O(1)
shift/unshift/concat/slice/splice - O(n)
forEach/map/filter/reduce - O(n)
*/
