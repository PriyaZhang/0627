import React from 'react'

export default function Sidebar(props) {    //形参

    console.log(props)
    let {bg,position}=props  //通过形参接收
    console.log(bg,position)

    var obj1 = {
        left : 0
    }

    var obj2 = {
        right : 0
    }

    var obj ={
        
        background:bg,   //要是就一个background 在下面可以只写这个
        width:"200px",   //固定的
        position:"fixed"
    }

    var styleobj = position === "left"?{...obj,...obj1}:{...obj,...obj2}  //展开合并

  return (
    <div style={styleobj}>  
        <ul>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
        </ul>
    </div>
  )
}
