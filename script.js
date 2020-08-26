// Task 1

function sum(a = 0, b = 0, c = 0, d = 0) { return a + b + c + d; }

function curry(fnc, ...args) {
  return (...args1) => {
    return fnc(...args, ...args1);
  }
}

const curriedFunction = curry(sum, 1, 2);
console.log(curriedFunction(3,4));



// Task 2

function counter() {
  return {
    count: 0,

    inc() {
      return ++this.count;
    },

    dec() {
      return --this.count;
    },

    value() {
      return this.count;
    },
  }
}


const iterator = counter();

console.log(iterator.inc());
console.log(iterator.inc());
console.log(iterator.inc());
console.log(iterator.inc());
console.log(iterator.inc());

console.log(iterator.dec());
console.log(iterator.dec());

console.log(iterator.value());
