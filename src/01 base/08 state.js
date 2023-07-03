import React, { Component } from 'react'

export default class App extends Component {

    state ={
        text:"收藏",
        show:true
    }

  render() {

    return (
      <div>
        <h1>欢迎</h1>
        <button onClick={()=>{
            
            this.setState({
                show:!this.state.show
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
