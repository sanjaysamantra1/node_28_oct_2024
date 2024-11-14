// class ES-6
class Trainer {
    constructor(name, course, time, fee) {
        this.name = name;
        this.course = course;
        this.time = time;
        this.fee = fee;
    }
}
let trainer1 = new Trainer('sanjay', 'NodeJs', '7.00AM', 8000);
let trainer2 = new Trainer('satish', 'Python', '4.00PM', 10000);
console.log(trainer1)
console.log(trainer2)