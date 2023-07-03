import React, { Component } from 'react'

export default class App extends Component {

  a = 100

  render() {
    return (
      <div>
        <input/>

        <button onClick={()=>{  
            console.log("click1",this.a)    //this和render一致,可以访问  函数里嵌套了一个函数
        }}>add1</button>

        <button onClick={this.handleClick2}>add2</button> 
        {/* 选bind是因为 需要点击一次按钮才执行一次*/}
        {/* 第一个this去找下面的函数,第二个this让他里面的和外面的一致*/}
        <button onClick={this.handleClick22.bind(this)}>add22-不推荐写法</button> 

        <button onClick={this.handleClick3}>add3</button>

        {/* 箭头函数，this指向App实例, handleClick4被this调用,下面的this和上面的一致*/}
        <button onClick={()=>{
            this.handleClick4()     
        }}>add4</button>

        <button onClick={()=>this.handleClick4()}>简写add4-推荐写法,尤其传参</button>

      </div>
    )
  }

    handleClick2(){
      console.log("click2",this)   //this是undefined
    }

    handleClick22(){
        console.log("click2",this.a)  
    }

    handleClick3=()=>{
        console.log("click3",this.a)  //箭头函数的this指向不管谁调用,总是和外面作用域保持一致，指向App的实例
    }

    handleClick4=()=>{
        console.log("click4",this.a)  
    }

}

var obj1 = {
  name:"obj1",
  getName(){
    console.log(this.name)   //this.name  谁调用就指向谁
  }
}

var obj2 = {
  name:"obj2",
  getName(){
    console.log(this.name)
  }
}

obj1.getName()  //结果obj1
obj1.getName.call(obj2)   //call 和 apply 改变this指向，自动执行函数，结果是obj2
obj2.getName.bind(obj1)()  //bild改变this指向，手动加括号执行函数，结果是obj1

