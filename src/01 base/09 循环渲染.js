import React, { Component } from 'react'

export default class App extends Component {
    
    
    state={
        list:[{
            id:1,
            text:"111"
        },
        {
            id:2,
            text:"222"
        },
        {
            id:3,
            text:"333"
        },
    ]
    }


  render() {

    //赋给一个变量
    //var newlist = this.state.list.map(item=><li>{item}</li>)

    return (
      <div>
        <ul>
            {/* {newlist} */}
            {/* 映射成li的样子,大括号包着数组显示数组 */}
            {/* 为了列表的复用和重排,设置key,key值的理想是item.id */}
            {this.state.list.map(item=>
                <li key={item.id}>{item.text}</li>)
            }   
        </ul>

      </div>
    )
  }
}

