// 生成器
function* generator() {
  yield 1
  yield 2
  yield 3
}

let generate = generator()
console.log(generate.next());  //{value: 1, done: false}
console.log(generate.next());  //{value: 2, done: false}
console.log(generate.next());  //{value: 3, done: true}
console.log(generate.next());  //{value: undefined, done: true}