// class Test{
//     constructor(){
//         this.a = 1;
//     }
//     testa(){
//         console.log("testa")

//     }
// }

// var obj = new Test()
// obj.testa()
// console.log(obj.a)


import React from "react"
class App extends React.Component{   //继承了，才算创建了一个组件类
    render(){      //渲染到页面
        return (
            <div>hello class组件</div> 
        )                         //需要一个返回值
    }
}

export default App  //导出