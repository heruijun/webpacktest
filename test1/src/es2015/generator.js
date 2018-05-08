// 生成器基本用法
// function* generator() {
//   yield 1
//   yield 2
//   yield 3
// }

// let generate = generator()
// console.log(generate.next());  //{value: 1, done: false}
// console.log(generate.next());  //{value: 2, done: false}
// console.log(generate.next());  //{value: 3, done: true}
// console.log(generate.next());  //{value: undefined, done: true}

// for (let item of generator()) {
//   console.log(item)
// }

// 使用上一步的结果值，进行下一步的运算
function* generator2() {
  yield 1;
  let value = yield 2;
  yield 3 + value;
}

let generate2 = generator2()

let value1 = generate2.next()
let value2 = generate2.next()
let value3 = generate2.next(value2.value)
console.log(value1)  //{value: 1, done: false}
console.log(value2)  //{value: 2, done: false}
console.log(value3)  //{value: 5, done: true}


// generator结合promise
function usePromise() {
  return new Promise(resolve => {
    resolve('my name is promise')
  })
}

function* generator() {
  try {
    yield usePromise()
  } catch (err) {
  }
}

let generate = generator()
generate.next().value.then(data => {
  console.log(data)
}, err => {
  console.log(err)
}).catch(err => {
  console.log(err)
});   //my name is promise