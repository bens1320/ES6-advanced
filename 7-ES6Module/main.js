import * as xx from './1.js'
import y, * as module2 from './2.js'

console.log(xx)

setTimeout(() => {
  xx.sayHello()
  console.log(xx.name)
}, 3000)

setTimeout(() => {
  y()
  console.log(module2.name)
}, 2000)