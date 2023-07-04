import React, { Component } from 'react'

class Child extends Component{
    render(){
        return(
        <div>
            {/* 子的属性能从父组件获取 
                子的属性可以由父组件修改
                子的属性不在子组件内部修改*/}
            child {this.props.text} 
        </div>
        
        )
    }
}

export default class App extends Component {
    state ={
        text:1111
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                text : 222
            })
        }}>父</button>
        <Child text = {this.state.text}/>
      </div>
    )
  }
}
