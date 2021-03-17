import skills from './skills.js'

let name = 'caoyi'
let age = 25
let sayHello = function () {
  alert(`你好，我是${name}，今年 ${age} 岁了，会 ${skills}`)
}

export {name, age, sayHello}
export default sayHello
