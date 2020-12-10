import Head from 'next/head'
import styles from '../styles/sass/style.scss'
import {useState} from 'react'
import { useRouter } from 'next/router'
//Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const router = useRouter()
  function logIn(e){
    e.preventDefault()
    console.log(email,password)
    fetch('http://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/auth/login',{
      method:"POST",
      body:JSON.stringify({
        email:email,
        password:password
      }),
      headers:{
        "content-type":"application/json"
      }
    }).then(response=>{
      response.json().then(result=>{
        console.log("result ",result)
        if (result.success === true) {
            localStorage.setItem('token', result.data.token);
            router.push("/")
        }else{
            alert('Datos incorrectos');
        }
      })
    })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Iniciar Sesión - LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>
      <Navbar/>
      <main className="w-screen mx-auto bg-gradient-to-b from-red-100 from-purple-100 h-auto md:h-screen p-10 flex justify-center">
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
               <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" onSubmit={logIn}> {/*onSubmit*/}
                <div
                  className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                >
                  Iniciar Sesión
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="username"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    v-model="form.email"
                    type="email"
                    required
                    autoFocus
                    placeholder="Email"
                    value={email}
                    onChange={e=>{setEmail(e.target.value)}}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="password"
                  >
                    Password  
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="form.password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    autocomplete="current-password"
                    value={password}
                    onChange={e=>{setPassword(e.target.value)}}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-purple-700 hover:bg-purple-900 focus:bg-blue-900" type="submit">Sign In</button>
                  <a
                    className="inline-block align-baseline font-normal text-sm text-purple-500 hover:text-purple-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
      </main>
      <Footer/>
    </div>
  )
}
