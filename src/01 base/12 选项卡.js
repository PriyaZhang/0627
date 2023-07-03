import React, { Component } from 'react'
import './css/02 选项卡.css'
import Film from './component/Film'
import Cinema from './component/Cinema'
import Center from './component/Center'

export default class App extends Component {
    state={
        list:[
            {
                id:1,
                text:"电影"
            },
            {
                id:2,
                text:"影院"
            },
            {
                id:3,
                text:"我的"
            }
        ],
        current:0
    }
    which(){
        switch(this.state.current){
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null
        }
    }


  render() {
    return (
      <div>
        {/* 三个组件,写在不同的js,引用 */}
        {/* {
            this.state.current ===0 && <Film></Film>
        }
        {
            this.state.current ===1 && <Cinema></Cinema>
        }
        {
            this.state.current ===2 && <Center></Center>
        }
         */}
        {/* 函数表达式 */}
        {   
            this.which()
        }



        <ul>{
            // 当前点击的索引===index
            this.state.list.map((item,index)=>
            <li key={item.id} className={this.state.current === index?'active':''} 
            onClick={()=>{this.handleClick(index)}}>{item.text}
            </li>)
        }</ul>
      </div>
    )
  }
  handleClick=(index)=>{
    console.log("click",index)
    this.setState({
        // 把状态改成点的那个
        current:index
    })

  }
}
