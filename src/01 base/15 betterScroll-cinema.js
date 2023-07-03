import React, { Component } from 'react'
import axios from 'axios'
import BScroll from 'better-scroll'

export default class Cinema extends Component {

  constructor(){   //axios 第三方库 专门用于请求数据
    super()
    // axios.get("请求地址").then(res=>{}).catch(err=>{console.log(err)})
    // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1349329").then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)})
    this.state={
      cinemaList:[],
      bakcinemaList:[]
    }

    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1349329",
      method:"get",
      headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16879999838557632142966785","bc":"110100"}',
        'X-Host':'mall.film-ticket.cinema.list'
      }
    }).then(res=>{
      console.log(res.data.data.cinemas) //真正的后端数据

      this.setState({
        cinemaList:res.data.data.cinemas,
        bakcinemaList:res.data.data.cinemas
      })
      new BScroll(".wrapper")
      
    })

  }
  render() {

    return (
      <div>
        {/* 对输入内容进行监听 */}
        <input onInput={this.handleTnput}></input>
        <div className="wrapper" style={{height:'500px', background:'yellow',overflow:'hidden'}}>
          <div className='content'>
          {
            // 把内容显示出来
          this.state.cinemaList.map(item =>
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
          )}
          {/* 由于前面ul li 有css样式 这边换个名字 */}
          </div>
        </div>
      </div>
    )
  }
  handleTnput=(event)=>{
    console.log("input",event.target.value)   //(也可以ref的方式)event自动保存输入的内容

    var newlist = this.state.bakcinemaList.filter(item=>item.name.toUpperCase().
    includes(event.target.value.toUpperCase())
    || item.address.toUpperCase().includes(event.target.value.toUpperCase())) 
                 //都转成大写 过滤条件filter不影响原数组
    console.log(newlist)

    this.setState({
      cinemaList:newlist   //cinemaList每次都会重新覆盖  可以刚开始就备份一下list 一直用备份的list去过滤
    })
  }
}

