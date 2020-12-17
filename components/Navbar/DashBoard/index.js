import React, { Component } from 'react'
import Link from 'next/link'

//Components
import MyAccount from './MyAccount'
import MyExperiences from './MyExperiences'

// Fontawesome
import { ReactElement } from 'react'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DashBoard extends Component{
  constructor(props) {
  super(props);
  this.state = {

  }

  this.setDashboardView = this.setDashboardView.bind(this)
}

  setDashboardView(view) {
    this.setState(state => ({
      activeView: view,
    }));
  }

  activeView() {
    if(this.state.activeView === "My Experiences"){
      return <MyExperiences />
    }
    else {
      return <MyAccount />
    }
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
    const activeDashboard = this.props.activeDashboard
    const dashboardSwitch = this.props.dashboardSwitch
    return (
      <div className={activeDashboard ? {activeDashboard} : 'hidden'}>
        <div className="h-100 bg-gray-900 bg-opacity-75 inset-0 fixed flex flex-row-reverse">
          <div className="w-9/12 md:w-2/5 bg-purple-50	 h-full fixed p-6 overflow-auto">
            <FontAwesomeIcon icon={faWindowClose} color="white" className="h-4 fill-current text-purple-600 absolute top-2 left-2" onClick={() => dashboardSwitch()}/>
            <div className="grid grid-cols-1">
              <div className="mb-6 col-span-1 p-6 flex flex-row items-center rounded bg-white">
                <img className="inline object-cover w-16 h-16 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                <div>
                  <p  className="font-light">{this.state.name}</p>
                  <p className="font-bold">{this.state.presentation}</p>
                </div>
              </div>
              <div className="col-span-1 flex justify-between mb-6 ">
                <button onClick={()=> {this.setDashboardView("My Account")}} className="transition duration-500 ease-in-out bg-transparent font-normal border border-purple-700 hover:bg-purple-700 focus:backgroundColor focus:bg-purple-700 focus:text-white text-purple-700 hover:text-white md:rounded  text-xs py-1 px-2 w-full" >
                  Mi cuenta
                </button>
                {/* <button onClick={()=> {this.setDashboardView("My Bucket List")}} className="transition duration-500 ease-in-out bg-transparent font-normal border border-purple-700 hover:bg-purple-700 focus:backgroundColor focus:bg-purple-700 focus:text-white text-purple-700 hover:text-white md:rounded  text-xs py-1 px-2" >
                  Mi Bucket List
                </button> */}
                <button onClick={()=> {this.setDashboardView("My Experiences")}} className="transition duration-500 ease-in-out bg-transparent font-normal border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white md:rounded text-xs py-1 px-2 w-full " >
                  Mis Experiencias
                </button>
                {/* <button onClick={()=> {this.setDashboardView("Messages")}} className="transition duration-500 ease-in-out bg-transparent font-normal border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white md:rounded text-xs py-1 px-2" >
                  Mensajes
                </button> */}
              </div>

              <div className="col-span-1 p-6  items-center rounded bg-white">

                {this.activeView()}

              </div>
            </div>

          </div>
        </div>
      </div>
        );
    }
}

export default DashBoard
