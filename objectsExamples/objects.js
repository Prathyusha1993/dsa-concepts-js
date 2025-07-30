const obj = {
    name: 'Pinky',
    age: 31,
    Gender: 'Female',
    'key-four': true,
    sayMyName: function(){
        console.log(this.name);
    }
}

obj.hobby = 'pianting';

console.log(obj);
console.log(obj.name);
console.log(obj['age']);
console.log(obj["key-four"]);

console.log(obj);

delete obj.hobby;
console.log(obj.sayMyName());

// Object.keys(), .values(), .entries

const objects = {
    a:'some string',
    b: 42,
    c: false
};
console.log(Object.keys(objects)); //returns array of keys in objects

console.log(Object.values(objects));  //returns array of values in objects

console.log(Object.entries(objects));  //return  array of key-value pairs in objects