let user = { name: 'sachin', 'last name': 'tendulkar', age: 35, add: 'mumbai' }

console.log(user.name);
console.log(user['age'])

// console.log(user.last name);
console.log(user['last name']);

let a = 'add';
console.log(user.a);
console.log(user[a]);

for(k in user){
    console.log(k+"============"+user[k])
}

// length of an object
console.log(Object.keys(user).length);