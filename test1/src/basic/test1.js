// // this用发介绍
// let person = {
//   name: 'Jay',
//   greet: function () {
//     console.log('hello, ' + this.name)
//   }
// }

// person.greet()  // hello, Jay
// let greet = person.greet  // 将函数引用存起来
// greet()   // 调用函数后结果是undefined，为什么？

// // this 的值并不是由函数定义放在哪个对象里面决定，而是函数执行时由谁来唤起决定

var name = "Jay Global";
var person = {
  name: 'Jay Person',
  details: {
    name: 'Jay Details',
    print: function () {
      return this.name;
    }
  },
  print: function () {
    return this.name;
  }
};
console.log(person.details.print());  // ?
console.log(person.print());          // ?
var name1 = person.print;
var name2 = person.details;
console.log(name1()); // ?
console.log(name2.print()) // print 是 name2 调起的，而 name2 指向 details。

// ----------------------
var outerFn = function () {
  var n = 5
  // console.log(innerItem)

  var innerFn = function () {
    var innerItem = 'inner'
    console.log(n)
  }
  return innerFn
}
outerFn()()

// ----------------------
var object = {
  data: [1, 2, 3],
  dataDouble: [1, 2, 3],
  double: function () {
    console.log("this inside of outerFn double()")
    console.log(this);
    return this.data.map(function (item) {
      console.log(this);      // 这里的 this 是什么？？
      return item * 2;
    });
  },
  doubleArrow: function () {
    console.log("this inside of outerFn doubleArrow()")
    console.log(this);
    return this.dataDouble.map(item => {
      console.log(this)      // 这里的 this 是什么？？
      return item * 2
    });
  }
};
object.double()
object.doubleArrow()