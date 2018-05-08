// 组合式继承
// function Animal(name) {
//   this.name = name
// }
// Animal.prototype.sayName = function () {
//   return this.name
// }
// function Dog(name, barking) {
//   Animal.call(this, name)
//   this.barking = barking
// }
// Dog.prototype = new Animal();
// Dog.prototype.constructor = Dog
// Dog.prototype.makeBarking = function () {
//   return this.barking
// }
// const dog = new Dog('zimo', '汪汪汪')
// console.log(dog.makeBarking())   //汪汪汪
// console.log(dog.sayName())  //zimo

// es6的继承写法
class Animal {
  constructor(name) {
    this.name = name
  }

  sayName() {
    return this.name
  }
}

class Dog extends Animal {
  constructor(name, barking) {
    super(name)
    this.barking = barking
  }

  makeBarking() {
    return this.barking
  }
}

const dog = new Dog('zimo', '汪汪汪')
console.log(dog.makeBarking())   //汪汪汪
console.log(dog.sayName())  //zimo