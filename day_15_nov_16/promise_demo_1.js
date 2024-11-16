let res1 = Math.max(10, 20, 30); // max() returns a value
console.log(res1);

let usersPromise = fetch('https://jsonplaceholder.typicode.com/users');
console.log(usersPromise);

usersPromise.then(
    (response) => {
        console.log(response);
        let jsonPromise = response.json();
        jsonPromise.then(
            (finalResponse) => {
                console.log(finalResponse)
            },
            (err) => {
                console.log(err)
            },
        )
    },
    (err) => {
        console.log(err)
    },
)
