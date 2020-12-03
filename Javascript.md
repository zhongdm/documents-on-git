js的一些对象及方法
#
Object.is() -- 比较两个对象参数是否相等（？）
Object.setProtptypeOf() -- 设置对象的原型

### Number 转换为  String
> 方法一: 10..toString()
> 方法二: (10).toString()
> 方法三: 10 + ''

### 常见js的问题
1. for..in, for..of的区别
```
let a = ['a', 'b', 'c']

for (let key in a) {
  console.log(key) // 0, 1, 2
}

for (let value of a) {
  console.log(value) // 'a', 'b', 'c'
}
```
2. CommonJS(nodejs), AMD(require.js), CMD(seajs)的区别
+ require(), 
+ define(['a', 'b'], callback) --- 依赖前置
+
  ```
  define(function(require, exports, module) { --- 懒加载（就近加载，延迟加载）， 一个文件即一个模块
    var $ = require('jquery.js')
    $('div').addClass('active');
  });
  seajs.use()
  ```
 3. exports变量 和 module.exports属性
 > 在nodejs中，exports相当于对module.exports的引用
 exports = module.exports = {}

### 赋值，浅拷贝与深拷贝

#### 赋值
+ a = b


#### 浅拷贝的实现方式
+ concat()
+ slice() 
> *** ps: 如果对象有子对象，修改子对象，原对象也会修改 ***
+ for ... in
+ Object.assign() --- 如果对象是一层，就是深拷贝
+ es6的扩展运算符（...）

####深拷贝
+ 循环赋值 （一般情况下不会用，1 --循环获取，性能问题， 2 -- 不清楚对象的内部属性以及结构，是否有相互引用等 ）
+ JSON.parse(JSON.stringify())
+ 借助lodash ---原理是啥？？？？？

#### https跳转到http，无法访问
+ 重定向地址： A -> B: window.location.href = B 

#### 浏览器中输入地址，回车后发生了什么？
DNS域名解析 -> http请求（三次握手） -> 页面解析（html tree, dom tree => render tree => render layer =>reflow, repaint(不改变布局和大小) 等）



### 相关链接：
* [SameValue比较法](https://tc39.github.io/ecma262/#sec-samevalue)
* 
