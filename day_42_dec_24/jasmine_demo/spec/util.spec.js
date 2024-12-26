const { fibonacci, isPrime, sumOfDigit } = require("../util");

describe("Test suit for util file", function () { // test suit  / group of test cases

    it("Should test fibonacci function", function () {  // 1 test case
        console.log('It-1')
        expect(fibonacci(2)).toEqual([0, 1, 1]);
        expect(fibonacci(3)).toEqual([0, 1, 1, 2]);
        expect(fibonacci(4)).toEqual([0, 1, 1, 2, 3]);
        expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
    });

    it("Should test isPrime function", function () {
        console.log('It-2')
        expect(isPrime(5)).toBe(true);
        expect(isPrime(6)).not.toBe(true);
        expect(isPrime(7)).toBe(true);
        expect(isPrime(8)).toBe(false);
    });
    it("Should test sumOfDigit function", function () {
        console.log('It-3')
        expect(sumOfDigit(125)).toBe(8);
    });

    beforeAll(() => {  // 1
        console.log('Before All')    // initialization
    })
    beforeEach(() => { // before every it()
        console.log('Before Each')
    })
    afterEach(() => {   // after every it()
        console.log('After Each')
    })
    afterAll(() => {  // 1
        console.log('After All');    // destruction
    })

});
