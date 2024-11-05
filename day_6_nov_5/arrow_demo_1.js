class Employee {
    fName = 'sachin';
    lName = ' Tendulkar';

    fullName1() { // this = how the function is called
        console.log(this.fName, this.lName)
    }
    fullName2 = () => { 
        console.log(this.fName, this.lName)
    }
}
let emp1 = new Employee();
emp1.fullName1(); // inside fullName1() , this = emp1
emp1.fullName2(); // inside fullName2() , this = emp obj

setTimeout(emp1.fullName1 , 2000);  // inside fullName1() , this = global
setTimeout(emp1.fullName2 , 4000);  // inside fullName1() , this = emp obj