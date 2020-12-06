import React, { Component } from 'react'
import Link from 'next/link'

//Components
import MyAccount from './MyAccount'
import MyBucketList from './MyBucketList'
import Messages from './Messages'

class DashBoard extends Component{
  constructor(props) {
  super(props);
  this.state = {
    activeView: "My Account",
    activeDashboard: false
  }

  this.setDashboardView = this.setDashboardView.bind(this)
  this.setActiveDashboard = this.setActiveDashboard.bind(this)

}

  setDashboardView(view) {
    this.setState(state => ({
      activeView: view,
      activeDashboard: false
    }));
  }

  activeView() {
    if(this.state.activeView === "My Account"){
      return <MyAccount />
    } if(this.state.activeView === "My Bucket List"){
      return <MyBucketList />
    } if(this.state.activeView === "Messages"){
      return <Messages />
    }
    else {
      return "Noma"
    }
  }


  setActiveDashboard () {
    this.setState(state => ({
      activeDashboard: !state.activeDashboard
    }));
  }

  activeDashBoard() {
    if(this.state.activeDashboard === true){
      return <DashBoard />
    } else {
      return
    }
  }


  render() {
    const isDashBoardActive = this.state.isDashBoardActive
    return (
            <div className={
              isDashBoardActive ? 'h-100 bg-gray-900 bg-opacity-75 inset-0 fixed flex flex-row-reverse' :
              'h-100 bg-gray-900 bg-opacity-75 inset-0 fixed flex flex-row-reverse'
            }>
              <sidebar className="w-11/12 md:w-1/5 bg-purple-50	 h-full fixed p-6 overflow-auto">
                <div className="grid grid-cols-1">
                  <div className="mb-6 col-span-1 p-6 flex flex-row items-center rounded bg-white">
                    <img class="inline object-cover w-16 h-16 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                    <div>
                      <p  className="font-light">Nombre de Asjgf</p>
                      <p className="font-bold">🌊 Playa Presentation</p>
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-between mb-6 ">
                    <button onClick={()=> {this.setDashboardView("My Account")}} className="transition duration-500 ease-in-out bg-transparent font-normal border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white md:rounded  text-xs py-1 px-2" >
                      Mi cuenta
                    </button>
                    <button onClick={()=> {this.setDashboardView("My Bucket List")}} className="transition duration-500 ease-in-out bg-transparent font-normal border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white md:rounded  text-xs py-1 px-2" >
                      Mi Bucket List
                    </button>
                    <button onClick={()=> {this.setDashboardView("My Experiences")}} className="transition duration-500 ease-in-out bg-transparent font-normal border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white md:rounded text-xs py-1 px-2" >
                      Mis Experiencias
                    </button>
                    <button onClick={()=> {this.setDashboardView("Messages")}} className="transition duration-500 ease-in-out bg-transparent font-normal border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white md:rounded text-xs py-1 px-2" >
                      Mensajes
                    </button>
                  </div>

                  <div className="col-span-1 p-6 flex flex-row items-center rounded bg-white">

                    {this.activeView()}

                  </div>
                </div>

              </sidebar>
            </div>
        );
    }
}

export default DashBoard
