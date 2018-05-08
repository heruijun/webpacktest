// Iterator接口——Symbol.iterator, for...of
let arr = ['my', 'name', 'is', 'iterator'];
let iter = arr[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

for (let item of arr) {
  console.log(item)
}

// 自定义迭代器的
let iteratorObj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
}

for (let item of iteratorObj) {
  console.log(item);
} 