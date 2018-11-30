# Vue 遇到的各种坑以及如何填

## Vue $emit触发多次：
> 原因解决：bus是全局的，在整个页面的生命周期里面的，然后切换路由的时候，component 的生命周期其实是控制不到你 bus的，也就是销毁不了这个事件，
可以在component的beforeDestory或者是destory事件中，也就是在组件销毁的时候手动执行下bus.$off("change_app_charts"),手动销毁事件

## vue + iview + spreadjs
> 在tabs组件下，引入spreadjs， 点击spreadjs的cell，滚动条会自动跳转到顶部
> 解决： iview的tab组件的属性animated导致的，禁用就可以了, :animated="false"; 
> ***根源是css3属性will-change，重新渲染了页面的指定区域***  will-change有待进一步理解


## vue v-for ：key
***Duplicate keys detected: '0'. This may cause an update error***
> :key="index"  同级元素不能有相同的index，比如
```
<tr v-for="(item, index) in individualList" ***:key="index"*** class="border-black-section blank-tr">
  <td class="bold">{{index + 1}}</td>
  <td class="bold left">{{item.employeeName}}</td>
  <td class="right">{{item.payableEE}}</td>
  <td class="right">{{item.payableER}}</td>
  <td class="right">{{item.totalPayable}}</td>
</tr>

<tr style="height:1px;border:1px solid #000;">
</tr>
<tr class="bold border-black" v-for="(item, index) in allTotal" ***:key="item + index"***>
  <td></td>
  <td class="left">{{ $t('compliance.taxReturn.summary.total') }}</td>
  <td class="right">{{item.totalPayableEE}}</td>
  <td class="right">{{item.totalPayableER}}</td>
  <td class="right">{{item.total}}</td>
</tr>
```
