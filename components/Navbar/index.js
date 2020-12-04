import React, { Component } from 'react'
import Link from 'next/link'

class Navbar extends Component{

  render() {
    return (
            <div>
              <ul id="nav" className="flex justify-between text-xs">
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
                    <li className="mt-4 bg-purple-600 text-white rounded-sm p-1">
                    <Link href="/new-user">
                      <a>Regístrate</a>
                    </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
        );
    }
}

export default Navbar

