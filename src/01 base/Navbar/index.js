import React, { Component } from 'react'
import PriyaPropTypes from 'prop-types'   //属性验证
console.log(PriyaPropTypes)

export default class Navbar extends Component {

  state ={
    //只能内部自己用，外面无法改变
  }

  static propTypes = {
    title:PriyaPropTypes.string,   
    leftshow:PriyaPropTypes.bool    
  }

  static defaultProps={   
    leftshow:true
  }

  render() {
    console.log(this.props)   
    let {title,leftshow} = this.props   //接收属性 可以接收多个
    console.log(leftshow)
    return (
      <div>
        {leftshow && <button>返回</button>}
        Navbar-{title}
        <button>Home</button>
        </div>

    )
  }
}

//类属性 不用new就可以访问
//Navbar.propTypes = {
  //title:PriyaPropTypes.string,   //验证是不是字符串的方法
  //leftshow:PriyaPropTypes.bool    //验证是不是bool的方法
//}
//封装组件的人 做好验证 另一个人就能发现错误

//设置一个默认值
// Navbar.defaultProps={   
//   leftshow:true
// }

//封装到一起，换个写法，见上文

class Test{
  a=1  //对象属性
  static a =100 //类属性
}
//Test.b = 100
//console.log(Test.b)
var obj = new Test();  //需要new
console.log(obj.a,Test.a)


