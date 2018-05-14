let vm = {}
let data = {
  name: 'zhangsan',
  age: 20
}

let key, value
for (key in data) {
  (function (key) {
    Object.defineProperty(vm, key, {
      get: function () {
        console.log('get: ', data[key])   // 监听
        return data[key]
      },

      set: function (newVal) {
        console.log('set: ', newVal)      // 监听
        data[key] = newVal
      }
    })
  })(key)
}

console.log(vm.name)
vm.name = 'haha'
console.log(vm.name)
console.log(data.name)