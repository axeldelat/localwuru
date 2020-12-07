import Head from 'next/head'
import styles from '../styles/sass/style.scss'
import { useState } from 'react'


//Components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function NewUser()  {
  const [name, setName] = useState('')
  const [presentation, setPresentation] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [paypalme, setPaypalMe] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthDate] = useState('')
  const [bio, setBio] = useState('')


  const addUser = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/auth/signup', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          presentation: presentation,
          phone: phone,
          email: email,
          password: password,
          paypalme: paypalme,
          gender: gender,
          birthdate: birthdate,
          bio: bio
        })
      })
    } catch(err) { }
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
            <form className="h-full overflow-auto  w-full h-full flex flex-col">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    htmlFor="name"
                  >
                    Nombre Completo
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="name"
                    type="text"
                    required
                    autoFocus
                    placeholder=""

                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                      className="block text-gray-700 text-sm font-normal mb-2"
                      htmlFor="presentation"
                    >
                      Presentation
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="Presentation"
                      type="text"
                      required
                      autoFocus
                      placeholder="Ej: 🤠Traveller & 👽 Sci-Fi Fan"

                      value={presentation}
                      onChange={e => setPresentation(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                  <label
                      className="block text-gray-700 text-sm font-normal mb-2"
                      htmlFor="phone"
                    >
                      Celular
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="phone"
                      type="number"
                      required
                      autoFocus
                      placeholder="Ej: +52 1234 5678 90"

                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                  <label
                      className="block text-gray-700 text-sm font-normal mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="email"
                      type="email"
                      required
                      autoFocus
                      placeholder="Ej: joe@gmail.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                  <label
                      className="block text-gray-700 text-sm font-normal mb-2"
                      htmlFor="email"
                    >
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="password"
                      type="password"
                      required
                      autoFocus
                      placeholder="Ej: joe@gmail.com"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                  <label
                      className="block text-gray-700 text-sm font-normal mb-2"
                      htmlFor="linkpaypalme"
                    >
                      Link Paypal.Me (Acepta Donativos)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="linkpaypalme"
                      type="text"
                      required
                      autoFocus
                      placeholder="Ej: paypal.me/joe"
                      value={paypalme}
                      onChange={e => setPaypalMe(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                  <label
                      className="block text-gray-700 text-sm font-normal mb-2"
                      htmlFor="gender"
                    >
                      Género
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="gender"
                      name="gender"
                      type="select"
                      required
                      autoFocus

                      value={gender}
                      onChange={e => setGender(e.target.value)}
                    >
                      <option selected> --Selecciona una opción-- </option>
                      <option value="male">Masculino</option>
                      <option value="female">Female</option>
                      <option value="other">Otro</option>
                    </select>
                </div>
                <div className="mb-4">
                  <label
                      className="block text-gray-700 text-sm font-normal mb-2"
                      htmlFor="birth"
                    >
                      Fecha de Nacimiento
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="birth"
                      type="date"
                      required
                      autoFocus

                      value={birthdate}
                      onChange={e => setBirthDate(e.target.value)}
                    />
                </div>
                <div className="">
                  <label
                      className="block text-gray-700 text-sm font-normal mb-2"
                      htmlFor="bio"
                    >
                      Bio
                    </label>
                    <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="5"
                    name="bio"
                    required
                    autoFocus

                    value={bio}
                    onChange={e => setBio(e.target.value)}
                    />
                </div>
              {/* <div className="mt-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    htmlFor="experience-duration"
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
              </div> */}
              <div className="flex items-center justify-between">
                <button className="px-4 py-2 my-4 rounded text-white inline-block shadow-lg bg-purple-700 hover:bg-purple-900 focus:bg-purple-700"
                type="submit"
                onClick={addUser}>
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
