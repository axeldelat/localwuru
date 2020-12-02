import React, { Component } from 'react'

class Navbar extends Component{
    render() {
        return (
            <div>
              <ul id="nav" className="flex justify-between text-xs">
                <li className="mt-2 ml-5 shadow-none"><a href="#"><img src="/images/localwuru.svg"/></a></li>
                <li>
                  <ul className="flex mr-5">
                    <li className="mt-5 text-gray-700 mr-4"><a href="#">Descubre</a></li>
                    <li className="mt-5 text-gray-700 mr-4"><a href="#">Iniciar Sesión</a></li>
                    <li className="mt-4 bg-purple-600 text-white rounded-sm p-1"><a href="#">Regístrate</a></li>
                  </ul>
                </li>
              </ul>
            </div>
        );
    }
}

export default Navbar