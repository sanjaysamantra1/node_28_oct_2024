// create an addition function that returns addition result after 1 sec
// throw error if both the params are not numbers

function add(a, b) {
    let additionPromise = new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject('Please pass 2 numbers');
        } else {
            setTimeout(() => {
                resolve(`Addition of ${a} & ${b} is ${a + b}`);
            }, 1000);
        }
    })
    return additionPromise;
}
add(4, 'abc').then(
    (res) => { console.log(res) },
    (err) => { console.log(err) }
)
add(2, 3).then(
    (res) => { console.log(res) },
    (err) => { console.log(err) }
)
