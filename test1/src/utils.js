export function test(text) {
    console.log(text)
}

// rest 参数（形式为...变量名），用于获取函数的多余参数
export const numbers = (...numbers) => {
    console.log(numbers)
}

// 当参数为一个对象时
export function foo({ x , y = 5 } = {} ) {
    console.log(x, y)
}

export function m2({ x, y } = { x : 1, y : 2 }) {
    return [ x, y ]
}