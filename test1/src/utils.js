export function test(text) {
    console.log(text)
}

// rest 参数（形式为...变量名），用于获取函数的多余参数
export const numbers = (...numbers) => {
    console.log(numbers)
}