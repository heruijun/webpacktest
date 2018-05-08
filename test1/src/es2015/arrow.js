const arr = [1, 2, 3]

const squares = arr.map(x => x * x)
console.log(squares)

const names = ['a', 'b', 'c', 'd', 'e']
const newSet = names.map((name, index) => ({
  id: index,
  name: name
}))
console.log(newSet)

// --------------
const fun = (function () {
  'use strict'

  return (x = 30) => {
    return x
  }
}())

console.log(fun(15))