let apples = 5;
let speed = 'fast';
let hasName = true;
let nothingMuch = null;
let nothing = undefined;
// built in objects
let now = new Date();
// Array
let colors = ['red', 'green', 'blue'];
let myNumbers = [1, 2, 3];
let truths = [true, true, false];
// Classes
class Car {
}
// let car: Car = new Car();
// Object literal
let point = {
    x: 10,
    y: 20,
};
// Function
const logNumber = (i) => {
    console.log(i);
};
// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};
// 2) When we declare a variable on one line
// and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
//# sourceMappingURL=variables.js.map