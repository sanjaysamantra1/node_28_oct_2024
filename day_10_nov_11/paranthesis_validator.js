function isValid(str) {
    let myMap = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    let myStack = [];

    for (let char of str) {
        let topMostChar = myStack[myStack.length - 1];

        if (char == "(" || char == "{" || char == "[") {
            myStack.push(char);
        } else if (topMostChar === myMap[char]) {
            myStack.pop();
        } else {
            return false;
        }
    }
    return myStack.length ? false : true;
}
var input =  "([{}]){([])}{}";
result = isValid(input);
console.log(result);