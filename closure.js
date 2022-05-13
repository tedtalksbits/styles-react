import crypto from "crypto";
let counterIncrement = (function () {
  let counter = 0;

  return function () {
    return ++counter;
  };
})();

console.log(counterIncrement());
console.log(counterIncrement());
console.log(counterIncrement());

function Buffer() {
  return crypto.randomBytes(8);
}

const newBuffer = new Buffer();
const newBuffer1 = new Buffer();

console.log(newBuffer);
console.log(newBuffer1);
