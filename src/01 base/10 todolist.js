import React, { Component } from 'react'
import './css/01 index.css'

export default class App extends Component {

    myref = React.createRef()  //获取标签对象
    state ={   // 使用state表示对象的属性 键值对的方式存放
        list:[{
            id:1,
            text:"aaa"
        }]
    }


  render() {
    return (
      <div>
        <input ref = {this.myref}></input>

        {/* 事件绑定 */}
        <button onClick={()=>{this.handleClick()}}>add</button>

        {/* 列表渲染 ,map有两个参数,index索引值,通过传index,告知是删除哪个*/}
        <ul>{
            this.state.list.map((item,index)=>
            <li key={item.id}>
            {/* {item.text} */}

            {/* 富文本编辑器 */}
            <span dangerouslySetInnerHTML={
                {
                    __html:item.text
                }
            }></span>
            <button onClick={()=>{this.handleDelClick(index)}}>del</button>
            </li>)
            }
        </ul>   
            {/* 条件渲染，数组的长度为0的话，显示暂无*/}
            {/* {this.state.list.length===0?<div>暂无</div>:null} */}

            {/* 是否创建div 前面为真则执行后面的，为假则不执行*/}
            {/* {this.state.list.length===0 && <div>暂无</div>} */}

            {/* 通过css样式 */}
            {<div className={this.state.list.length===0?" ":"hidden"}>暂无</div>}
      </div>
    )
  }



  handleClick=()=>{
    console.log("click",this.myref.current.value)  //输入框里的值

    //不要直接修改状态
    //this.state.list.push(this.myref.current.value)  //往后面追加一个数据
    //this.setState({    
       // list:this.state.list
    //})
    let newlist = [...this.state.list] //不会改变原始数组
    newlist.push({
        id:Math.random(),//生产不同id的函数
        text:this.myref.current.value
    })
    this.setState({   //手动通知列表进行更新  动态更新值
        list:newlist
    })
 
    this.myref.current.value = ''  //输入值之后，输入框清空

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
