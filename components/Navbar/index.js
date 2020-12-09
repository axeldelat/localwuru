import React, { Component } from 'react'

// Components
import DashBoard from './DashBoard';
import Nav from './Nav'


class Navbar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeView: "My Account",
      activeDashboard: false
    }
  }

  dashboardSwitch() {
    let toggle = !this.state.activeDashboard
    this.setState(`activeDashboard: ${toggle}`)
  }

  render() {
    return (
      <>
        <Nav dashboardSwitch={this.dashboardSwitch}/>
        <DashBoard activeDashboard={this.state.activeDashboard} dashboardSwitch={this.dashboardSwitch}/>
      </>
    );
  }
}

export default Navbar
