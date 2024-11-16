
async function fetchUsers() {
    let userPromise = fetch('https://jsonplaceholder.typicode.com/users');
    try {
        let response = await userPromise;
        let finalResponse = await response.json();
        console.log(finalResponse);
    } catch (err) {
        console.log('something went wrong');
    }
}
fetchUsers();