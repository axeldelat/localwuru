import Head from 'next/head'
import styles from '../styles/sass/style.scss'
import {useState} from 'react'
import { useRouter } from 'next/router'
//Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'

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
      Gracias Por Compartir tu Experiencia
      <Footer/>
    </div>
  )
}
