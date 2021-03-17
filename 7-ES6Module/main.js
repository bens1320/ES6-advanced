import x, {name as name1} from './1.js'
import y, * as module2 from './2.js'

setTimeout(() => {
  x()
  console.log(name1)
}, 3000)

setTimeout(() => {
  y()
  console.log(module2.name)
}, 2000)