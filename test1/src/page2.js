import * as utils from 'utils'

console.log(utils.test('测试2'))
console.log(utils.numbers(1, 3, 5))
console.log(utils.foo())
console.log(utils.m2({ x: 2, y: 3 }))

const target = 'world'
const word = `hello ${target}`  // 字符串模版
console.log(word)

console.log(utils.wordOnlyText('Hey dude, how is it going?'))