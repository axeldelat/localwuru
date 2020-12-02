import Head from 'next/head'
import styles from '../styles/sass/style.scss'

import React, {useState} from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

//Components
import CallToAction from '../components/CallToAction'

// Load Source Sans Pro typeface
// require('typeface-source-sans-pro')



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>

      <Navbar/>
      <main>
        <article class="prose lg:prose-2xl">
          <h1>
            Welcome to LocalWuru /Development
          </h1>
          <p>
            For years parents have espoused the health benefits of eating garlic bread with cheese to their
            children, with the food earning such an iconic status in our culture that kids will often dress
            up as warm, cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
            springing up around the country.
          </p>
        </article>
        <section className="container mx-auto">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-10 flex flex-col justify-center">
            <img className="object-contain w-full" src="/images/graphiclw.png"/>
          </div>
          <div className="p-10 prose lg:prose-2xl flex flex-col justify-center">
            <h2>¿Qué es Local Wuru?</h2>
            <div>
              <p className="text-justify">Sabemos que hay personas excepcionales allá afuera que por sus experiencias, cultura o educación su visión del mundo y los espacios tiene un valor único. Local Wuru es un espacio para compartir experiencias a través de nuesvas experiencias.</p>
              <p className="text-justify">Haciendo experiencias locales únicas solo posibles con la experiencia de un gurú local.</p>
            </div>
            <div>
              <button class="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
                Saber Más
              </button>
            </div>
          </div>
        </div>
        </section>

        <section
        className="min-h-screen p-10 flex flex-wrap content-end"
        style={{
          backgroundImage: "url(" + "/images/experience-alex.jpg" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          <div >
            <p className="text-white">"Mi experiencia como chef te revelará aspectos únicos de la cultura gastronómica de mi ciudad"</p>
            <p className="text-white font-bold">Alexander F.</p>
            <p className="text-white font-bold">Chef & Traveler</p>
            <p className="text-white font-bold">San Francisco</p>
          </div>
          <div></div>
          <div></div>
        </div>
        </section>
        <CallToAction />
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
      <Footer/>
    </div>
  )
}
