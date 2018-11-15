# Vue $emit触发多次：
> 原因解决：bus是全局的，在整个页面的生命周期里面的，然后切换路由的时候，component 的生命周期其实是控制不到你 bus的，也就是销毁不了这个事件，
可以在component的beforeDestory或者是destory事件中，也就是在组件销毁的时候手动执行下bus.$off("change_app_charts"),手动销毁事件
