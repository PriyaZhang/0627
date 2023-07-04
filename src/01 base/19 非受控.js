import React, { Component } from 'react'

export default class App extends Component {
    myusername = React.createRef()
  render() {
    return (
      <div>
        <h1>登录页</h1>
        {/* 一个输入框和myusername绑定在一起 defaultValue第一次的默认值，一个初始值*/}
        <input type = "text" ref={this.myusername}
            defaultValue="priya"/>

        <button onClick={()=>{
            console.log(this.myusername.current.value)
        }}>登录</button>
        <button onClick={()=>{
            this.myusername.current.value = ''
        }}>重置</button>
      </div>
    )
  }
}
