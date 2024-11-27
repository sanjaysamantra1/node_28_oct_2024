const url = require('url');
const querystring = require('querystring');

let myUrl = 'https://www.flipkart.com/search?q=skybag&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off'
const myQuery = url.parse(myUrl).query;

console.log(querystring.parse(myQuery))
console.log(querystring.decode(myQuery))

let queryObj = {
    q: 'skybag',
    otracker: 'search',
    otracker1: 'search',
    marketplace: 'FLIPKART',
    'as-show': 'on',
    as: 'off'
}
console.log(querystring.stringify(queryObj))
console.log(querystring.encode(queryObj))


