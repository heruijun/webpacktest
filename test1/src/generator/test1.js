// 生成器委托是指：将生成器组合起来使用，构成一个生成器。
function* gene1() {
  yield 'red';
  yield 'green';
}

function* gene2() {
  yield 1;
  yield 2;
}

function* combined() {
  yield* gene1();
  yield* gene2();
}

let iterator = combined();
console.log(iterator.next()); //{value: "red", done: false}
console.log(iterator.next()); //{value: "green", done: false}
console.log(iterator.next()); //{value: 1, done: false}
console.log(iterator.next()); //{value: 2, done: true}
console.log(iterator.next()); //{value: undefined, done: true}