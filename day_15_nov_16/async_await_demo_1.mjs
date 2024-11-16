
let userPromise = fetch('https://jsonplaceholder.typicode.com/users');
let response = await userPromise;
let finalResponse = await response.json();
console.log(finalResponse);