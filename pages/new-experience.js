import Head from 'next/head'
import styles from '../styles/sass/style.scss'
import { useState } from 'react'

//Components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function NewExperiences() {
  const [title, setTitle] = useState('')
  const [city, setCity] = useState('')
  const [estate, setEstate] = useState('')
  const [country, setCountry] = useState('')
  const [type, setType] = useState('')
  const [duration, setDuration] = useState('')
  const [season, setSeason] = useState('')
  const [budget, setBudget] = useState('')
  // const [categories, setCategories] = useState('')
  const [recommendations, setRecommendations] = useState('')
  const [description, setDescription] = useState('')


  const addExperience = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/experiences/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          city: city,
          state: estate,
          country: country,
          type: type,
          duration: duration,
          season: season,
          budget: budget,
          // categories: categories,
          // image: image,
          recommendations: recommendations,
          description: description
        })
      })
    } catch(err) { }
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
            <form className="h-full overflow-auto  w-full h-full flex flex-col">
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
                  placeholder=""

                  value={title}
                  onChange={e => setTitle(e.target.value)}
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
                    placeholder=""

                    value={city}
                    onChange={e => setCity(e.target.value)}
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
                    placeholder=""

                    value={estate}
                    onChange={e => setEstate(e.target.value)}
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
                    placeholder=""

                    value={country}
                    onChange={e => setCountry(e.target.value)}
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

                    value={type}
                    onChange={e => setType(e.target.value)}
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

                    value={duration}
                    onChange={e => setDuration(e.target.value)}
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

                    value={season}
                    onChange={e => setSeason(e.target.value)}
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

                    value={budget}
                    onChange={e => setBudget(e.target.value)}
                  >
                    <option selected>-- Selecciona una Opción --</option>
                    <option value="cheap">$</option>
                    <option value="mid">$$</option>
                    <option value="expensive">$$$</option>
                    <option value="very-expensive">$$$$</option>
                  </select>
              </div>
              <span className="block text-gray-700 text-sm font-normal mb-2">
              Categorías
              </span>
              <label className=" text-gray-700 font-normal mb-2 text-xl">
              <input
                name="monuments"
                type="checkbox"

                // value={"🗽 Monumentos, "}
                // onChange={e => setCategory(console.log(e.target.value))}
                />
              🗽 Monumentos
              </label>
              <label className=" text-gray-700 font-normal mb-2 text-xl">
              <input
                name="food"
                type="checkbox"

                // value={false}
                // onChange={(value) => (
                //   value = e.target.value
                //   if()
                // )
                // }

                />
              🍝 Foodie
              </label>
              <label className=" text-gray-700 font-normal mb-2 text-xl">
              <input
                name="beach"
                type="checkbox" />
              🏖️ Playa
              </label>
              <label className=" text-gray-700 font-normal mb-2 text-xl">
              <input
                name="aquatic"
                type="checkbox" />
              🌊 Playa
              </label>
              <label className=" text-gray-700 font-normal mb-2 text-xl">
              <input
                name="architecture"
                type="checkbox" />
              🏛️ Arquitectura
              </label>
              <label className=" text-gray-700 font-normal mb-2 text-xl">
              <input
                name="mountain"
                type="checkbox" />
              ⛰️ Montaña
              </label>
              <label className=" text-gray-700 font-normal mb-2 text-xl">
              <input
                name="roadtrip"
                type="checkbox" />
              🛣️ Roadtrip
              </label>
              <label className=" text-gray-700 font-normal mb-2 text-xl">
              <input
                name="music"
                type="checkbox" />
              🎼 Musical
              </label>
              <label className=" text-gray-700 font-normal mb-2 text-xl">
              <input
                name="mixology"
                type="checkbox" />
              🍸 Mixology
              </label>
              <label className=" text-gray-700 font-normal mb-2 text-xl">
              <input
                name="streetfood"
                type="checkbox" />
              🌮 Comida Callejera
              </label>
              <label className=" text-gray-700 font-normal mb-2 text-xl">
              <input
                name="theatre"
                type="checkbox" />
              🎭 Teatro
              </label>
              <label className=" text-gray-700 font-normal mb-2 text-xl">
              <input
                name="art"
                type="checkbox" />
              🖼️ Arte
              </label>
              <div className="m-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    htmlFor="experience-duration"
                  >
                    Portada
                  </label>
              </div>
              {/* <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                <p className="hidden md:block mb-3 font-semibold text-gray-900 flex flex-wrap justify-center ">
                  <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
                </p>
                <input type="file" multiple className="hidden" />
                <button id="button" className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
                  Upload a file
                </button>
              </div> */}
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

                  value={recommendations}
                  onChange={e => setRecommendations(e.target.value)}
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

                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  />
              </div>
              <div className="flex items-center justify-between">
              <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-purple-700 hover:bg-purple-900 focus:bg-purple-700"
              type="submit"
              onClick={addExperience}>
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
