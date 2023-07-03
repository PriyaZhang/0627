import React, { Component } from 'react'

export default class App extends Component {

    state={
        count:1
    }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAdd1}>add1</button>
        <button onClick={this.handleAdd2}>add2</button>
        <button onClick={this.handleAdd11}>add11</button>
      </div>
    )
  }
  handleAdd1=()=>{
    this.setState({
        count:this.state.count+1
    })
    console.log(this.state.count)

    this.setState({
        count:this.state.count+1
    })
    console.log(this.state.count)

    this.setState({
        count:this.state.count+1
    })
    console.log(this.state.count)
// setState处在同步的逻辑中，异步更新状态，异步更新真实dom
  }

  handleAdd2=()=>{
    setTimeout(()=>{
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)
    
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)
    
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)
//setState处在异步的逻辑中，同步更新状态，同步更新真实dom
        },0)
    }

    handleAdd11=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            console.log(this.state.count) //setState接受第二个参数，第二个参数式回调函数，状态和dom更新完后就会被触发
        })
        this.setState({
            count:this.state.count+1
        },()=>{
            console.log(this.state.count)
        })
       
    }
}
 
