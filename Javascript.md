js的一些对象及方法
#
Object.is() -- 比较两个对象参数是否相等（？）
Object.setProtptypeOf() -- 设置对象的原型

### Number 转换为  String
> 方法一: 10..toString()
> 方法二: (10).toString()
> 方法三: 10 + ''

## 常见js的问题
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
  

### 相关链接：
* [SameValue比较法](https://tc39.github.io/ecma262/#sec-samevalue)
* 
