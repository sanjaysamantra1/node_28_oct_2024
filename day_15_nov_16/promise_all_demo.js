let api1 = fetch('https://jsonplaceholder.typicode.com/users'); // 2
let api2 = fetch('https://jsonplaceholder.typicode.com/comments'); // 3
let api3 = fetch('https://jsonplaceholder.typicode.com/todos'); // 2

Promise.all([api1,api2,api3]).then(
    (([response1,response2,response3])=>{
        Promise.all([response1.json(),response2.json(),response3.json()]).then(
            (finalResponse=>{
                console.log(finalResponse)
            })
        )
    })
);