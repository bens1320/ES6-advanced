{
  let name = 'caoyi'
  let age = 25
  // 依赖（用到了，外部skills）
  let skills = window.skills
  // 导出（给别人用，module2 ）
  window.module2 = function () {
    alert(`你好，我是${name}，今年 ${age} 岁了，会 ${skills}`)
  }
}