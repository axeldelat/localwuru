import React, { Component } from 'react'
import Link from 'next/link'



class Navbar extends Component{
    render() {
        return (
            <header>
              <nav>
                <ul id="nav" class="flex justify-between text-xs">
                  <li class="mt-2 ml-5 shadow-none">
                  <Link href="/">
                    <a><img src="/images/localwuru.svg"/></a>
                  </Link>
                  </li>
                  <li>
                    <ul class="flex mr-5">
                      <li class="mt-5 text-gray-700 mr-4"><a href="#">Descubre</a></li>
                      <li class="mt-5 text-gray-700 mr-4"><a href="#">Iniciar Sesión</a></li>
                      <li class="mt-4 bg-purple-600 text-white rounded-sm p-1"><a href="#">Regístrate</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </header>
        );
    }
}

export default Navbar
