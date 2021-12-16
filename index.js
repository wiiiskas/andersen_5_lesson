const MyArray = require('./tasks/myFilter');
const Calculator = require('./tasks/calculator');
const Stack = require('./tasks/stack');

console.log("======= Calculator =======");

const calculator = new Calculator(12, 3);
console.log('logSum', '15', calculator.logSum()); // 15
console.log('logDiv', 4, calculator.logDiv()); // 4
calculator.setX(15);
console.log('logDiv', '5', calculator.logDiv()); // 5
const logCalculatorDiv = calculator.logDiv;
console.log('method', '5', logCalculatorDiv()); // 5

console.log("======= Polyfill myFilter =======");

const array = new MyArray(1,2,3,4,5).myFilter(item => item > 3);
console.log(array);

console.log("======= Stack  ======");

const stack = new Stack(4);
stack.push('1'); //добавить новый элемент в стек (генерировать ошибку, если стек переполнен);
stack.push(2); //добавить новый элемент в стек (генерировать ошибку, если стек переполнен);
stack.push(4); //добавить новый элемент в стек (генерировать ошибку, если стек переполнен);
console.log('pop', stack.pop());// - pop() - удалить верхний элемент стека и вернуть его (генерировать ошибку, если стек пуст);
console.log('peek', stack.peek());// - peek() - получить верхний элемент стека (вернуть null, если стек пуст);
console.log('array', stack.toArray());// - toArray() - возвращает новый массив, состоящий из элементов стека.
console.log('isEmpty', stack.isEmpty());// - isEmpty() - возвращает логическое значение (пуст стек или нет);