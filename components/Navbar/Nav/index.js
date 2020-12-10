import React, { Component } from 'react'
import Link from 'next/link'

// Fontawesome
import { ReactElement } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Nav({fixed, dashboardSwitch}) {
  console.log(dashboardSwitch)
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a><img src="/images/localwuru.svg"/></a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-purple-700 block lg:hidden outline-none focus:outline-none w-12"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} color="white"/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/search-results">
                  <a className="px-3 py-5 flex items-center text-sm font-light uppercase leading-snug text-gray-700 hover:opacity-75">
                  Descubre
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                  <a className="px-3 py-5 flex items-center text-sm font-light uppercase leading-snug text-gray-700 hover:opacity-75"
                  onClick={() => dashboardSwitch()}
                  >
                  Mi Cuenta
                  </a>
              </li>
              <li className="nav-item">
                <Link href="/new-user">
                  <a className="items-center">
                    <button className="h-10 px-5 m-2 text-purple-100 uppercase font-bold transition-colors duration-150 bg-purple-700 rounded-lg focus:shadow-outline hover:bg-purple-800">Regístrate</button>
                  </a>
                </Link>
              </li>
              <li className="nav-item flex content-center py-3 pl-2">
                  <img className="inline object-cover w-8 h-8 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
