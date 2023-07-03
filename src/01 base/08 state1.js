import React, { Component } from 'react'

export default class App extends Component {

  constructor(){  //构造器函数
    super()
    this.state={
        text:"收藏",
        show:true,
        name:"priya"
    }

  }

  render() {

    return (
      <div>
        <h1>欢迎 {this.state.name}</h1>
        <button onClick={()=>{
            
            this.setState({
                show:!this.state.show,
                name:"xiaoming"
            }) //间接修改状态

            if (this.state.show){
                console.log("收藏的逻辑")
            }else{
                console.log("取消的逻辑")
            }
        }}>{this.state.show?"收藏":"取消"}</button>


      </div>
    )
  }
}
