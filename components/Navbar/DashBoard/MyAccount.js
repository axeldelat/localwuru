
import React, { Component } from 'react'
import Link from 'next/link'

class MyAccount extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount(){
    const token = localStorage.getItem('token')
    const response = await fetch('https://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/auth/profile',{
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
        <div>
          <div className="mb-4">
            <span
              className="block text-gray-700 text-sm font-normal mb-2"
            >
              Phone
            </span>
            <p
              className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
            {this.state.phone}
            </p>
          </div>
          <div className="mb-4">
            <span
              className="block text-gray-700 text-sm font-normal mb-2"
            >
              Email
            </span>
            <p
              className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
            {this.state.email}
            </p>
          </div>
          <div className="mb-4">
            <span
              className="block text-gray-700 text-sm font-normal mb-2"
            >
              Paypal Me
            </span>
            <p
              className="bg-gray-100 appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            >
            {this.state.paypalme}
            </p>
          </div>
        </div>
      </>

        );
    }
}

export default MyAccount
