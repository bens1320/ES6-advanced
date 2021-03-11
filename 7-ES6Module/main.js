import module1 from './1.js'
import module2 from './2.js'

setTimeout(() => {
  module1()
}, 3000)

setTimeout(() => {
  module2()
}, 2000)