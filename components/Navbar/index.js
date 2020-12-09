import React, { Component } from 'react'
import Link from 'next/link'
import DashBoard from '../DashBoard/MyBucketList';

// import DashBoard from '../DashBoard'

class Navbar extends Component{




  render () {
    // const activeDashboard = this.state.activeDashboard

    return (
            <div className="shadow">
              <ul id="nav" className="flex justify-between text-sm">
                <li className="mt-2 ml-5 shadow-none">
                <Link href="/">
                  <a><img src="/images/localwuru.svg"/></a>
                </Link>
                </li>
                <li>
                  <ul className="flex mr-5">
                    <li className="mt-5 text-gray-700 mr-4">
                    <Link href="/search-results">
                      <a>Descubre</a>
                    </Link></li>
                    <li className="mt-5 text-gray-700 mr-4">
                      <Link href="/login">
                        <a>Iniciar Sesión</a>
                      </Link>
                    </li>
                    <li className="mt-5 text-gray-700 mr-4">
                      <Link href="/">
                        <a onClick={this.setActiveDashboard}>Mi Cuenta</a>
                      </Link>
                    </li>
                    <li className="mt-4 bg-purple-600 text-white rounded-sm p-1">
                    <Link href="/new-user">
                      <a>Regístrate</a>
                    </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
        )
  }
}

export default Navbar


