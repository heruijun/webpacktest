import * as utils from 'utils'

console.log(utils.test('测试2'))
console.log(utils.numbers(1, 3, 5))
console.log(utils.foo())
console.log(utils.m2({ x: 2, y: 3 }))

// 字符串模版
const name = 'Will Wen Gunn'
const level = 'Gold'
const message = `
Hello, ${name}.
Here is Turing Airline, you are the ${level} member of our Privilege Club.
`
console.log(message)

console.log(utils.wordOnlyText('Hey dude, how is it going?'))