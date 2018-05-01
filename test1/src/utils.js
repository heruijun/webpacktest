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

// promise加载图片
export function loadImage(src) {
    const promise = new Promise((resolve, reject) => {
        let img = document.createElement('img')
        img.onload = function() {
            resolve(img)
        }
        img.onerror = function() {
            reject('未找到图片')
        }
        img.src = src
    })
    return promise
}
