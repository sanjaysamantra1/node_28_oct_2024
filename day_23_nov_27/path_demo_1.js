const path = require('path');

console.log(path.sep)
console.log(path.delimiter)

const path1 = './day_23_notes.txt';

console.log(path.basename(path1))
console.log(path.dirname(path1))
console.log(path.extname(path1))
console.log(path.isAbsolute(path1))
console.log(path.isAbsolute('C:/Users/SANJAY/OneDrive/Desktop/NareshIT/node_28_oct_2024/day_23_nov_27'))

const path2 = path.format({
    dir : 'd:/nodejs/module/path',
    base : 'demo_1.js'
})
console.log(path2)

const pathObj = path.parse('d:/nodejs/module/path/abc.js');
console.log(pathObj)

console.log(path.join('d:/nodejs/module','path/abc.js'))
console.log(path.join('d:/nodejs/module/','/path/abc.js'))
console.log('d:/nodejs/module/'+'/path/abc.js')
console.log('d:/nodejs/module'+'path/abc.js')