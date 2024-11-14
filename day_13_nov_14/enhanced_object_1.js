let emp = {
    firstName: 'sachin',
    lastName: 'tendulkar',
    sal: 3000,

    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    },
    annualSalary() {
        console.log(this.sal * 12)
    }
}
emp.fullName()
emp.annualSalary()