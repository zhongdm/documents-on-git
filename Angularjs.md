#动态组件
+ ComponentFactoryResolver

+ viewContainerRef
```
// 为具体的组件解析出一个componentFactory
const componentFactory = this.ComponentFactoryResolver.resolveComponentFactory(item.component);

//ViewContainerRef - 获取对容器视图的访问权， 容器- 动态载入的组件的宿主
const viewContainerRef = this.***DirectiveName.viewContainerRef;
viewContainerRef.clear();

const componentRef = viewContainerRef.createComponent(componentFactory)
(<**interface>componentRef.instance).data = item.data;
```
