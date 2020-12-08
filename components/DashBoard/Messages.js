
import React, { Component } from 'react'


class Messages extends Component{

  render() {
    return (
            <div>
              <div class="w-full max-w-lg overflow-hidden rounded-lg shadow-lg flex justify-center items-center p-2">
                <div class="w-full sm:w-1/3">
                  <img class="inline object-cover w-16 h-16 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                </div>
                <div class="flex-1 px-1 py-4">
                  <p class="leading-normal text-gray-700">Nombre de Viajero</p>
                </div>
              </div>
            </div>
        );
    }
}

export default Messages
