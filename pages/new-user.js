import Head from 'next/head'
import styles from '../styles/sass/style.scss'
import React, { useReducer, useState } from 'react';
import { Router, useRouter } from 'next/router'

//Components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function NewUser()  {
  const router = useRouter()

  const formReducer = (state, event) => {
    console.log("error", event.target)
    return {
      ...state,
      [event.target.name]: event.target.value
    }
  }

  const [formData, setFormData] = useReducer(formReducer, {});

  const addUser = async (e, state) => {
    e.preventDefault()
    try {
      const res = await fetch('http://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/auth/signup', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          presentation: formData.presentation,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
          paypalme: formData.paypalme,
          gender: formData.gender,
          birthdate: formData.birthdate,
          bio: formData.bio
        })
      })
      if(!res.ok) {
        throw new Error('Fetch Failed')
      }
      router.push('/new-user-success')
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Registro de Usuario - LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main className="w-screen mx-auto bg-gradient-to-b from-red-100 from-purple-100 grid grid-cols-1 md:grid-cols-6 gap-4">
        <section className="text-left h-auto p-10 md:p-20 flex flex-col  col-span-1 md:col-span-4 md:col-start-2">
          <div className="bg-white p-5 rounded-lg text-black  my-3 shadow rounded-sm m-3">
            <h1 className="text-5xl font-light mb-10">
              Registro de Usuario
            </h1>
            <form className="h-full overflow-auto  w-full h-full flex flex-col" onSubmit={addUser}>
              <div className="mb-4">
                <label>
                  <p className="block text-gray-700 text-sm font-normal mb-2">Nombre Completo</p>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  required

                  onChange={setFormData}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label>
                  <p className="block text-gray-700 text-sm font-normal mb-2">Email</p>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  type="email"
                  required

                  onChange={setFormData}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label>
                  <p className="block text-gray-700 text-sm font-normal mb-2">Password</p>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  required

                  onChange={setFormData}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label>
                  <p className="block text-gray-700 text-sm font-normal mb-2">Presentación</p>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="presentation"
                  type="text"
                  required

                  onChange={setFormData}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label>
                  <p className="block text-gray-700 text-sm font-normal mb-2">Teléfono Celular</p>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="phone"
                  type="number"
                  required

                  onChange={setFormData}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label>
                  <p className="block text-gray-700 text-sm font-normal mb-2">Paypalme Link</p>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="paypalme"
                  type="text"
                  required

                  onChange={setFormData}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label>
                  <p className="block text-gray-700 text-sm font-normal mb-2">Género</p>
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                  name="gender"
                  type="select"
                  required

                  onChange={setFormData}
                >
                  <option disabled selected>Selecciona</option>
                  <option value="male">Masculino</option>
                  <option value="female">Female</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="mb-4">
                <label>
                  <p className="block text-gray-700 text-sm font-normal mb-2">Fecha de Nacimiento</p>
                  <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="birthdate"
                  type="date"
                  required

                  onChange={setFormData}
                  />
                </label>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                >
                  Bio
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="10"
                  name="bio"
                  type="textarea"
                  required

                  onChange={setFormData}
                  />
              </div>

              <div className="flex items-center justify-between">
              <button className="px-4 py-2 my-4 rounded text-white inline-block shadow-lg bg-purple-700 hover:bg-purple-900 focus:bg-purple-700" type="submit">
                Enviar
              </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
