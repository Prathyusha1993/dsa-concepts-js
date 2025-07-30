const set = new Set([1,2,3]);
for (const item of set){
    console.log(item);
}

set.add(4);
set.add(4); // Duplicate, will not be added
console.log(set);
console.log(set.has(4));
set.delete(3);
console.log(set);
console.log(set.size);
set.clear(); // Removes all elements