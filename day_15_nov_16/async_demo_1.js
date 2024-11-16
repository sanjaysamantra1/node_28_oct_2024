function add(a, b) {
    return a + b;
}
let addResult = add(2,3);
console.log(addResult);

// Note: Every async function returns promise object
async function mul(a, b) {
    return a + b;
}
let mulPromise = mul(2,3);
mulPromise.then(data=>console.log(data));

