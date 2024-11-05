class Employee {
    fName = 'sachin';
    lName = ' Tendulkar';

    fullName1() { // this = how the function is called
        console.log(this)
        console.log(this.fName, this.lName)
    }
    fullName2 = () => { 
        console.log(this.fName, this.lName)
    }
}
let empObj = new Employee();
empObj.fullName1(); // inside fullName1() , this = emp obj
empObj.fullName2(); // inside fullName2() , this = emp obj

let a = empObj.fullName2;
a();
let b = a;
b();

let x = empObj.fullName1;
x();
