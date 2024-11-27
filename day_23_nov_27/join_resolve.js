const path = require('path');

console.log(path.join());    // .
console.log(path.resolve());  // absolute path

console.log(path.join('hello','/path1','path2'))
console.log(path.resolve('hello','/path1','path2')); // c:/path1/path2

console.log(path.join('/hello','/path1','/path2'));  // \hello\path1\path2
console.log(path.resolve('/hello','/path1','/path2')); // C:\path2