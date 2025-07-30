function squareRootUsingBinarySearch(n){
    if( n < 0) return -1;
    if(n === 0 || n === 1) return n;

    let left = 1, right=n, result=0;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(mid*mid === n){
            return mid;
        }
        if(mid * mid < n){
            left = mid+1;
            result = mid;
        }else{
            right = mid -1;
        }
    }
    return result;
}

console.log(integerSqrt(10)); // 3
console.log(integerSqrt(25)); 