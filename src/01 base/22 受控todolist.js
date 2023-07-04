import React, { Component } from 'react'
import './css/01 index.css'

export default class App extends Component {

    state ={  
        text:'',
        list:[{
            id:1,
            text:"1111",
            isChecked:false
        }]
    }


  render() {
    return (
      <div>
        <input value={this.state.text}  onChange={(evt)=>{
            console.log("onChange",evt.target.value)

            this.setState({
              text:evt.target.value
            })
        }}></input>

        <button onClick={()=>{this.handleClick()}}>add</button>

        <ul>{
            this.state.list.map((item,index)=>
            <li key={item.id}>
                <input type="checkbox" checked={item.isChecked} 
                onChange={()=>{this.handleClicked(index)}}></input>
            <span style={{textDecoration:item.isChecked?"line-through":''}}>{item.text}</span>
            <button onClick={()=>{this.handleDelClick(index)}}>del</button>
            </li>)
            }
        </ul>   
            {this.state.list.length===0 && <div>暂无</div>}
      </div>
    )
  }
  handleClicked=(index)=>{
    console.log(index)
    let newlist = [...this.state.list]
    newlist[index].isChecked = !this.state.list[index].isChecked

    this.setState({
        list:newlist
    })
  }


  handleClick=()=>{
    let newlist = [...this.state.list] //不会改变原始数组
    newlist.push({
        id:Math.random(),//生产不同id的函数
        text:this.state.text,
        isChecked:false
    })
    this.setState({   //手动通知列表进行更新  动态更新值
        list:newlist,
        text:''
    })

  }

  handleDelClick=(index)=>{
    console.log("del",index)
    let newlist = this.state.list.slice()  //第二种方式不会改变原始数据
    newlist.splice(index,1) //从索引的位置开始删除一个元素
    this.setState({    
        list:newlist
    })
 }

  
}
