
import React, { Component } from 'react'
import Link from 'next/link'

class DashBoard extends Component{

  render() {
    return (
            <div>
              <label class="text-gray-700">
                <input type="checkbox" value=""/>
                <span class="ml-1">Lorem ipsum dolor sit<span class="ml-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-700 rounded">Borrar</span></span>
              </label>
              <div class="flex items-center justify-between">
              <button class="px-4 py-2 my-4 rounded text-white inline-block shadow-lg bg-purple-700 hover:bg-purple-900 focus:bg-purple-700" type="submit">Compartir</button>
              </div>
            </div>
        );
    }
}

export default DashBoard
