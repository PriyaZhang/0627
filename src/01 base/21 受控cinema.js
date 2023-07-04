import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

  constructor(){  
    super()
    this.state={
      cinemaList:[],
      mytext:""
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
        cinemaList:res.data.data.cinemas
      })
      
    })

  }
  render() {

    return (
      <div>
        <input value={this.state.mytext} 
        onChange={(evt)=>{
          this.setState({
            mytext:evt.target.value
          })
        }}></input>
          {
          this.getCinemaList().map(item =>
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
          )}
      </div>
    )
  }
  getCinemaList(){
    return this.state.cinemaList.filter(item=>item.name.toUpperCase().
    includes(this.state.mytext.toUpperCase())
    || item.address.toUpperCase().includes(this.state.mytext.toUpperCase())) 
  }
}

