import Head from 'next/head'
import styles from '../styles/sass/style.scss'
import React, { useReducer, useState } from 'react';
import { Router, useRouter } from 'next/router'



//Components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function NewExperiences() {
  const router = useRouter()

  const formReducer = (state, event) => {
    console.log("error", event.target)
    return {
      ...state,
      [event.target.name]: event.target.value
    }
  }

  const [formData, setFormData] = useReducer(formReducer, {});

  const addExperience = async (e, state) => {
    e.preventDefault()
    try {
      console.log(formData)
      const res = await fetch('http://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/experiences/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: formData.title,
          city: formData.city,
          state: formData.estate,
          country: formData.country,
          type: formData.type,
          duration: formData.duration,
          season: formData.season,
          budget: formData.budget,
          imgUrl: formData.imgUrl,
          recommendations: formData.recommendations,
          description: formData.description
        })
      })
      if(!res.ok) {
        throw new Error('Fetch Failed')
      }
      router.push('/new-experience-success')
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Nueva Experiencia - LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main className="w-screen mx-auto bg-gradient-to-b from-red-100 from-purple-100 grid grid-cols-1 md:grid-cols-6 gap-4">
        <section className="text-left h-auto p-10 md:p-20 flex flex-col  col-span-1 md:col-span-4 md:col-start-2">
          <div className="bg-white p-5 rounded-lg text-black  my-3 shadow rounded-sm m-3">
            <h1 className="text-5xl font-light mb-10">
              Nueva Experiencia
            </h1>
            <form className="h-full overflow-auto  w-full h-full flex flex-col" onSubmit={addExperience}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  htmlFor="title"
                >
                  Nombre de Experiencia
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="title"
                  type="text"
                  required
                  autoFocus

                  onChange={setFormData}
                />
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    htmlFor="city"
                  >
                    Ciudad
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="city"
                    type="text"
                    required
                    autoFocus

                    onChange={setFormData}
                  />
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    htmlFor="estate"
                  >
                    Estado
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="estate"
                    type="text"
                    required
                    autoFocus

                    onChange={setFormData}
                  />
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    htmlFor="country"
                  >
                    País
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="country"
                    type="text"
                    required
                    autoFocus

                    onChange={setFormData}
                  />
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    htmlFor="experience-type"
                  >
                    Tipo de Experiencia
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="type"
                    name="type"
                    type="select"
                    required
                    autoFocus

                    onChange={setFormData}
                  >
                    <option selected>-- Selecciona una Opción --</option>
                    <option value="solo">Solo</option>
                    <option value="couple">En Pareja</option>
                    <option value="family">Familiar</option>
                  </select>
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    htmlFor="duration"
                  >
                    Duración
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="duration"
                    name="duration"
                    type="select"
                    required
                    autoFocus

                    onChange={setFormData}
                  >
                    <option selected>-- Selecciona una Opción --</option>
                    <option value="1day">1 día</option>
                    <option value="1-7days">2-7 días</option>
                    <option value="7daysmore">7 días o más</option>
                  </select>
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    htmlFor="season"
                  >
                    Temporada
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="season"
                    name="season"
                    type="select"
                    required
                    autoFocus

                    onChange={setFormData}
                  >
                    <option selected>-- Selecciona una Opción --</option>
                    <option value="spring">Primavera</option>
                    <option value="summer">Verano</option>
                    <option value="fall">Otoño</option>
                    <option value="winter">Invierno</option>
                  </select>
              </div>
              <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    htmlFor="budget"
                  >
                    Presupuesto
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="budget"
                    name="budget"
                    type="budget"
                    required
                    autoFocus

                    onChange={setFormData}
                  >
                    <option selected>-- Selecciona una Opción --</option>
                    <option value="cheap">$</option>
                    <option value="mid">$$</option>
                    <option value="expensive">$$$</option>
                    <option value="very-expensive">$$$$</option>
                  </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  htmlFor="po"
                >
                  Imagen de Portada
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="imgUrl"
                  type="text"
                  required
                  autoFocus

                  onChange={setFormData}
                />
              </div>
              <div className="m-0">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  htmlFor="recommendations"
                >
                  Recomendaciones
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="3"
                  name="recommendations"
                  required
                  autoFocus

                  onChange={setFormData}
                />
              </div>
              <div className="m-0">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    htmlFor="description"
                  >
                    Describe tu experiencia
                  </label>
                  <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="10"
                  name="description"
                  required
                  autoFocus

                  onChange={setFormData}
                  />
              </div>
              <div className="items-center justify-between">
              <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-purple-700 hover:bg-purple-900 focus:bg-purple-700"
              type="submit">
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
