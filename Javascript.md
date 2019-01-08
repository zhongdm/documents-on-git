js的一些对象及方法
#
Object.is() -- 比较两个对象参数是否相等（？）
Object.setProtptypeOf() -- 设置对象的原型

### Number 转换为  String
> 方法一: 10..toString()
> 方法二: (10).toString()
> 方法三: 10 + ''

## 常见js的问题
> for..in, for..of的区别
```
let a = ['a', 'b', 'c']

for (let key in a) {
  console.log(key) // 0, 1, 2
}

for (let value of a) {
  console.log(value) // 'a', 'b', 'c'
}

### 相关链接：
* [SameValue比较法](https://tc39.github.io/ecma262/#sec-samevalue)
* 
