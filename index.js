'use  strict';

(function foo() {
  const num1 = 2;
  const num2 = 6;
  const sum = (() => num1 + num2)();
  const diff = (() => num1 - num2)();
  const mult = (() => num1 * num2)();
  console.log(sum, diff, mult)
}());