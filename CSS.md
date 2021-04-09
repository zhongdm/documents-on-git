#css style
shape-circled: 文字环绕？


### 多行或单行的时候，指定宽度，需要居中？
> 不需要line-height，子元素不可以height:100%
> display: flex, flex-direction: column, justify-content: center

### Font-family
Alegreya,Georgia,serif //英文

## BFC - Block Formatting Context

+ 普通流
+ 浮动
+ 绝对定位 - 整体脱离普通流

#### 触发BFC的条件
+ body根元素
+ float元素 - float除none以外的值
+ 绝对定位元素 - （absolute， fixed）
+ display为inline-block, table-cells, flex
+ overflow除visible以外的值

#### BFC特性及其应用
+ 同一个BFC下外边距会发生折叠
  - 两个div元素的margin是100px， 实际渲染中两个div上下之间的margin是100px， 而不是200px.
+ BFC可以包含浮动的元素（清除浮动）
+ BFC可以组织元素被浮动元素覆盖
