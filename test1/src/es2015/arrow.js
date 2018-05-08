const arr = [1, 2, 3]

const squares = arr.map(x => x * x)
console.log(squares)

const names = ['a', 'b', 'c', 'd', 'e']
const newSet = names.map((name, index) => ({
  id: index,
  name: name
}))
console.log(newSet)

// ------- 匿名函数中的箭头函数 -------
const fun = (function () {
  'use strict'

  return (x = 30) => {
    return x
  }
}())

console.log(fun(15))

// ------- 打印方法名称 --------
function foo() { }
console.log(foo.name)

// ------- 变量的作用域提升 --------
var ddd = 10
function hello() {
  console.log(ddd)
  var ddd = 11
  console.log(ddd)
}
hello()

// ------- 解构赋值 -------
let [a, b, { name, age }, ...args] = [1, 2, { name: 'heruijun', age: 24 }, 3, 4, 5]
console.log(a, b, name, age, args)