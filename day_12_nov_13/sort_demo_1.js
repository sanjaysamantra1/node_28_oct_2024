let arr1 = [10, 50, 20, 40, 30];
arr1.sort();
console.log(arr1);

let arr2 = [10, 9, 101, 8, 91, 95, 7, 103, 105]
arr2.sort();
console.log(arr2);

//numeric sort
arr2.sort((a, b) => a - b);
console.log(arr2);

let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];
// sort the employees by sal-ascending
employees.sort((e1, e2) => e1.sal - e2.sal);
console.log(employees)

// sort the employees by name-ascending
employees.sort((e1, e2) => e1.name.localeCompare(e2.name));
console.log(employees)