let arr = [1, 2, 3]

let iterator = arr[Symbol.iterator]()
console.log(iterator.next().value)  // 1
console.log(iterator.next().value)  // 2
console.log(iterator.next().value)  // 3
console.log(iterator.next().value)  // undefined