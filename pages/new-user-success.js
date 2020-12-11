import Head from 'next/head'
import styles from '../styles/sass/style.scss'
import {useState} from 'react'
import { useRouter } from 'next/router'
//Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'

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
        <title>Gracias por registrarte - LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>
      <Navbar/>
      <CallToAction />
      <Footer/>
    </div>
  )
}
