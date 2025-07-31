const map = new Map([['a', 1], ['b', 2]])

for(const [key, value] of map){
    console.log(`${key}: ${value}`);
}

map.set('c', 3);
console.log(map.has('c'));
console.log(map.size);
map.delete('c');
console.log(map);
map.clear() // Removes all elements