import { test } from 'utils'
import './css/index.css'
import './css/login.css'

console.log(test('测试1'))

window.onpopstate = function (event) {
  console.log('location: ' + document.location)
  console.log('state: ' + JSON.stringify(event.state))
}