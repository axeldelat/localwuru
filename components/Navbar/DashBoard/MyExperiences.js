
import React, { Component } from 'react'
import Link from 'next/link'

class MyExperiences extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount(){
    const token = localStorage.getItem('token')
    const response = await fetch('http://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/auth/profile',{
      method:'POST',
      headers:{
        authorization: token,
        'content-type':"application/json"
      }
    })
    const responseJSON = await response.json()

    console.log(this.state)
    const profile = this.setState( responseJSON.profile )
    console.log(this.state)

    console.log(responseJSON)
  }
  render() {
    return (
      <>
        hola
      </>

        );
    }
}

export default MyExperiences
