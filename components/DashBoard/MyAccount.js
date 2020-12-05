
import React, { Component } from 'react'
import Link from 'next/link'

class DashBoard extends Component{

  constructor(props) {
    super(props);
    this.state = {
      activeView:
    }
  }

  render() {
    return (
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  for="full-name"
                >
                  Nombre Completo {this.state.date.toLocaleTimeString()}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="full-name"
                  type="text"
                  required
                  autofocus
                  disabled
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="presentation"
                  >
                    Presentation
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="Presentation"
                    type="text"
                    required
                    autofocus
                    disabled
                    placeholder="Ej: 🤠Traveller & 👽 Sci-Fi Fan"
                  />
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="cellphone"
                  >
                    Celular
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="cellphone"
                    type="number"
                    required
                    autofocus
                    disabled
                    placeholder="Ej: +52 1234 5678 90"
                  />
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    type="email"
                    required
                    autofocus
                    disabled
                    placeholder="Ej: joe@gmail.com"
                  />
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="linkpaypalme"
                  >
                    Link Paypal.Me
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="linkpaypalme"
                    type="text"
                    required
                    autofocus
                    disabled
                    placeholder="Ej: paypal.me/joe"
                  />
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="gender"
                  >
                    Género
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="gender"
                    name="gender"
                    type="select"
                    required
                    disabled
                    autofocus
                  >
                    <option disabled selected>Selecciona</option>
                    <option value="male">Masculino</option>
                    <option value="female">Female</option>
                    <option value="other">Otro</option>
                  </select>
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="birth"
                  >
                    Fecha de Nacimiento
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="birth"
                    type="date"
                    required
                    disabled
                    autofocus
                  />
              </div>
              <div className="">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="bio"
                  >
                    Bio
                  </label>
                  <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="5"
                  name="bio"
                  required
                  disabled
                  autofocus
                  />
              </div>
              <div className="mt-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="experience-duration"
                  >
                    Avatar
                  </label>
              </div>
              <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                <p className="hidden md:block mb-3 font-semibold text-gray-900 flex flex-wrap justify-center ">
                  <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
                </p>
                <input type="file" multiple className="hidden" />
                <button id="button" className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
                  Upload a file
                </button>
              </div>
              <div className="my-4">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  required
                  autofocus
                  placeholder="**********"
                />
              </div>
              <div class="flex items-center justify-between">
              <button class="px-4 py-2 my-4 rounded text-white inline-block shadow-lg bg-purple-700 hover:bg-purple-900 focus:bg-purple-700" type="submit">Enviar</button>
              </div>
            </form>
        );
    }
}

export default DashBoard
