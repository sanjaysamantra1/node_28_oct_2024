let user = {
    firstName: 'Sachin',
    lastName: ' Tendulkar',
    fullName1: function () {
        // this = How/Where the function is invoked
        // this = user
        console.log('fullName-1 ', this.firstName, this.lastName)
    },
    fullName2: () => {
        // this = where the function is written
        // this = window
        console.log('fullName-2 ', this.firstName, this.lastName)
    }
}
user.fullName1();
user.fullName2();