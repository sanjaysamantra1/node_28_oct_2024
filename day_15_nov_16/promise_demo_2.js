fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    response.json().then(finalData => console.log(finalData))
}).catch(err => {
    console.log(err)
})