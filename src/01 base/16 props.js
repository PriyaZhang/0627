//props 属性 复用性  怎么写 怎么接收 怎么验证 怎么设默认值
import React, { Component } from 'react'
import Navbar from './Navbar'   //引用navber组件

export default class App extends Component {
  render() {
    //上面父组件传来的一个对象 并把它放到Navber里
    var obj ={
      title:"test",
      leftshow:false
    }
    return (
      <div>
        <div>
          <h2>首页</h2>
          {/* leftshow要用{},js的地盘,就可以传过去布尔值 */}
          <Navbar title = "首页" leftshow={false}/>  
        </div>
        <div>
          <h2>列表</h2>
          <Navbar title = "列表"/>
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar title = "购物车"/>
        </div>
        <div>
          {/* <Navbar title = {obj.title} leftshow = {obj.leftshow}/> */}
          {/* 简写上面的一段,对象的属性正好和孩子要接收的属性一致,...展开 ,还能带些别的属性*/}
          <Navbar {...obj}/>
        </div>
      </div>
    )
  }
}

