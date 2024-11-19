function add(a, b) {
    console.log(`Addition of ${a} and ${b} is ${a + b}`);
}
add(+process.argv[2] , +process.argv[3]);