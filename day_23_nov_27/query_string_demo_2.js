const querystring = require('querystring');

let myQuery = 'q=sky bag&otracker=search&otracker1=search&market place=FLIPKART&as-show=on&as=off'
console.log(myQuery);

let escapedQuery = querystring.escape(myQuery);
console.log(escapedQuery)

let unescapedQuery = querystring.unescape(myQuery);
console.log(unescapedQuery)



