import React, { Component } from 'react'

export default class App extends Component {

  a = 100
  myref = React.createRef()   //创建一个ref

  render() {

    return (
      <div>
        {/* 给标签设置ref,点完按钮,可以拿到输入框的值*/}
        <input ref={this.myref}/>  
        <button onClick={()=>{  
            console.log("click1",this.myref.current.value)   //输出 click1 <input>  获得input元素的值
        }}>add1</button>


        <button onClick={()=>this.handleClick4()}>add4</button>
      </div>
    )
  }

handleClick4 =()=>{
    console.log("click4",this.myref.current.value)
}


}



