import React, { Component } from 'react'

class LoginForm extends Component{
    render() {
        return (
          <div class="flex items-center justify-center">
          <div class="w-full max-w-md">
            <form class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
              <div
                class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
              >
                Iniciar Sesión
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-normal mb-2"
                  for="username"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  v-model="form.email"
                  type="email"
                  required
                  autofocus
                  placeholder="Email"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-normal mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="form.password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  autocomplete="current-password"
                />
              </div>
              <div class="flex items-center justify-between">
                <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-purple-700 hover:bg-purple-900 focus:bg-blue-900" type="submit">Sign In</button>
                <a
                  class="inline-block align-baseline font-normal text-sm text-purple-500 hover:text-purple-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
        );
    }
}

export default LoginForm
