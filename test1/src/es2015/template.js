// 字符串模版
let a = 'aa'
let b = `hello ${a}`
console.log(b)

// starsWith 和 endsWith
const str = "start in the head";
console.log(str.startsWith('start'));  //true
console.log(str.startsWith('head'));  //false

const str2 = "something in the end";
console.log(str2.endsWith('end'));   //true
console.log(str2.endsWith('something'));  //false