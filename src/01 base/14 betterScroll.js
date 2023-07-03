import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class App extends Component {

  state={
    list:[]
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.getData()}}>click</button>
        <div className="wrapper" style={{height:'200px',
            background:'yellow',overflow:'hidden'}}>
          <ul className="content">
          {
            this.state.list.map(item=>
              <li key={item}>{item}</li>
              )
          }
          </ul>
        </div>
      </div>
    )
  }

  getData(){
    var list =[1,2,3,4,5,6,7,8,9,0,11]

    this.setState({
      list:list
    },()=>{
      new BScroll(".wrapper")  //更新之后 平滑滚动
    })

    

  }
}
