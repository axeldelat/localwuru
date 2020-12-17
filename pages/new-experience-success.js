import Head from 'next/head'
import styles from '../styles/sass/style.scss'
import {useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


//Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function NewUserSucces() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gracias por Compartir  - LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>
      <Navbar/>
      <main className="w-screen mx-auto bg-gradient-to-b from-red-100 from-purple-100 h-auto md:h-screen p-10 flex justify-center">
        <div className="flex items-center justify-center flex-col ">
          <img
            src="/images/noexperiences.svg"
            alt="Viajeros"
            className="object-center my-10"
            />
          <p className="font-extrabold text-4xl text-center mb-10">Gracias por compartir tu experiencia</p>
          <Link href="/new-experience">
            <button className="text-2xl bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mb-10">
              Publicar
            </button>
          </Link>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
