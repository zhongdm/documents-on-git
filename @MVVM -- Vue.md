## Virtual Dom
### diff算法
### Snabbdom
  + key
  + style
    - destroy（具有遗传性）, remove(当前节点)， delayed， ...
  + class
  + on - 添加时间
  + hook - 回调事件 - insert， remove， destroy


## 常用插件
+ vuex-persist - 解决vuex的状态不能持久化的问题，使用storage或者cookie来解决
+ axios/ vue-axios

## 公共插件
+ jscpd - 检查代码重复率
+ live-server - 执行后可直接在浏览器中预览

## 其他
+ 持久化的问题：immutable插件，监听属性，在做任何添加或者删除修改等，会创建一个新的对象。
