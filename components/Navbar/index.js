import React, { Component } from 'react'
import Link from 'next/link'
import Modal from 'react-modal'

Modal.setAppElement("#__next")

//Hacer routing modal
class Navbar extends Component{
  render() {
    return (
            <div>
              <ul id="nav" class="flex justify-between text-xs">
                <li class="mt-2 ml-5 shadow-none">
                <Link href="/">
                  <a><img src="/images/localwuru.svg"/></a>
                </Link>
                </li>
                <li>
                  <ul class="flex mr-5">
                    <li class="mt-5 text-gray-700 mr-4"><a href="#">Descubre</a></li>
                    <li class="mt-5 text-gray-700 mr-4">
                      <Link href="/" as="/login">
                        <a>Iniciar Sesión</a>
                      </Link>
                    </li>
                    <li class="mt-4 bg-purple-600 text-white rounded-sm p-1"><a href="#">Regístrate</a></li>
                  </ul>
                </li>
              </ul>
              <Modal isOpen={false}>
                hola
              </Modal>
            </div>
        );
    }
}

export default Navbar
