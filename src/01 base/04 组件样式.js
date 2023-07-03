import React, { Component } from 'react'
import './css/01 index.css'  //导入css模块

export default class App extends Component {    //和文件末尾写export default App一个意思
  render() {
    var name = "priya"
    var obj = {    //定义为一个对象
        backgroundColor:"yellow", //在别的地方为background-color 在这边要驼峰
        fontSize:"30px"
    }
    return (
      <div>
            {/* {}就会当成js,将逻辑放进{}中*/}
            {10+8} - {name}
            {10>20?"aa":"bb"}

            <div style={obj}>1111</div>
            {/* 第一个{}表示要插入js 第二个{}表示对象 */}
            <div style={{background:"red"}}>222</div>

            {/*外部css文件中写了active样式 */}
            <div className='active'>333333</div>
            <div id='id1'>444444444</div>

            {/* 鼠标在用户名上的时候,输入框也能输入,不一定非要点击输入框 */}
            <label htmlFor='username'>用户名：</label>
            <input type='text' id='username'/>
      </div>
    )
  }
}
