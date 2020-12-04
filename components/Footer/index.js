import React, { Component } from 'react'

class Footer extends Component{
    render() {
        return (
            <div>
              <ul id="footer" className="flex justify-between shadow-sm text-sm">
                <li className="flex mt-2">
                    <a href="#" className="mt-1 ml-5"><img src="/images/Group6.svg"/></a>
                    <div className="mt-2 ml-2 text-gray-700">Local Wuru Copyright</div>
                </li>
                <li>
                  <ul className="flex mr-5 mb-2">
                    <li className="mt-4 text-gray-700 mr-4"><a href="#">¿Qué es?</a></li>
                    <li className="mt-4 text-gray-700 mr-4"><a href="#">Aviso de Privacidad</a></li>
                    <li className="mt-4 text-gray-700"><a href="#">Mapa del sitio</a></li>
                  </ul>
                </li>
              </ul>
            </div>
        );
    }
}

export default Footer
