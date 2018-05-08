// 实例1
let arr = [1, 2, 3]

let iterator = arr[Symbol.iterator]()
console.log(iterator.next().value)  // 1
console.log(iterator.next().value)  // 2
console.log(iterator.next().value)  // 3
console.log(iterator.next().value)  // undefined

// 实例2
let obj = {
  items: [],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item
    }
  }
}

obj.items.push(1)
obj.items.push(2)

for (let num of obj) {
  console.log(num)
}

let arr3 = [1, 2, 3];
let arr4 = [7, 8, 9];
let array = [...arr3, 5, ...arr4];
console.log(array); //1,2,3,5,7,8,9