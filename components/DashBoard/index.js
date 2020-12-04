import React, { Component } from 'react'
import Link from 'next/link'

//Components
import MyAccount from './MyAccount'

class DashBoard extends Component{

  render() {
    return (
            <div className="h-100 bg-gray-900 bg-opacity-75 inset-0 fixed flex flex-row-reverse">
              <sidebar className="w-11/12 md:w-2/6 bg-purple-50	 h-full fixed p-6 overflow-auto">
                <div className="grid grid-cols-1">

                  <div className="mb-6 col-span-1 p-6 flex flex-row items-center rounded bg-white">
                    <img class="inline object-cover w-16 h-16 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                    <div>
                      <p  className="font-light">Nombre de Asjgf</p>
                      <p className="font-bold">🌊 Playa Presentation</p>
                    </div>
                  </div>

                  <div className="col-span-1 flex justify-between mb-6 ">
                    <button className="transition duration-500 ease-in-out bg-transparent font-normal border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white md:rounded  text-xs py-1 px-2" >
                      Mi cuenta
                    </button>
                    <button className="transition duration-500 ease-in-out bg-transparent font-normal border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white md:rounded  text-xs py-1 px-2" >
                      Mi Bucket List
                    </button>
                    <button className="transition duration-500 ease-in-out bg-transparent font-normal border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white md:rounded text-xs py-1 px-2" >
                      Mis Experiencias
                    </button>
                    <button className="transition duration-500 ease-in-out bg-transparent font-normal border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white md:rounded text-xs py-1 px-2" >
                      Mensajes
                    </button>
                  </div>

                  <div className="col-span-1 p-6 flex flex-row items-center rounded bg-white">
                    <MyAccount />
                  </div>


                    <p className="text-justify mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac enim malesuada, tempor nisl id, malesuada purus. Donec imperdiet urna in mi venenatis, vitae fringilla dui ornare.</p>
                </div>

              </sidebar>
            </div>
        );
    }
}

export default DashBoard
