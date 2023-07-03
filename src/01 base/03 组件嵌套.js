//一个页面只有一个根组件
//Navbar Swiper Tabber 并列
//Navbar里有个Child
//标签要首字母大写

import React, { Component } from 'react'


class Child extends Component {
    render() {
      return <div>Child
        </div>
    }
  }


class Navbar extends Component {
  render() {
    return <div>Navbar
        <Child></Child>   
      </div>
  }
}

function Swiper(){
    return(
        <div>Swiper</div>
    )
}

const Tabbar = () =><div>Tabber</div>   //箭头函数 只有一条return 则可以简写

class App extends Component {
  render() {
    return (
        <div>
            <Navbar></Navbar>    
            <Swiper></Swiper>
            <Tabbar></Tabbar>
        </div>
    )
  }
}

export default App