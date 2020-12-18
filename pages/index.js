import Head from 'next/head'
import styles from '../styles/sass/style.scss'

import React, {useState,useEffect} from 'react'
import Router from 'next/router'
import Link from 'next/link'

//Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import ExperienceCard from '../components/ExperienceCard'

// Load Source Sans Pro typeface
// require('typeface-source-sans-pro')



export default function Home() {
  const [recentExperiences,setrecentExperiences] = useState([])
  useEffect(()=>{
    getRecentExperiences()
  },[])
  //setSearch(router.query)
  const getRecentExperiences = async ()=>{
    const response = await fetch(`http://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/experiences`)
    const data = await response.json()
    let allRecentExperiences = data.data.experiences.slice(-3)
    console.log("un paso más cerca !" ,allRecentExperiences)
    setrecentExperiences(allRecentExperiences)
  }
  const [search, setSearch] = useState("")
  const getExperiences = ()=>{
    Router.push({
      pathname: '/search-results',
      query: { keyword: search }
    })
  }
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
        <section className="hero grid grid-cols-1 md:grid-cols-12 grid-rows-2 h-screen p-10 md:p-0"
        style={{
          backgroundImage: "url(" + "/images/hero.jpg" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <h1 className=" self-end mb-4 col-span-1 md:col-span-12  text-white text-center text-5xl font-extralight">Experiencias increíbles,<br />contadas por personas únicas</h1>
            <form className="col-span-1 md:col-span-9 md:col-start-3 row-start-2">
              <input className="w-full text-center h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Buscar por Ciudad" onChange={e => setSearch(e.target.value)}/>
              <img src="/images/Search.svg" className="relative right-7 cursor-pointer bottom-11 left-4" onClick={getExperiences}/>
            </form>
        </section>
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-9 gap-4 md:p-32">
          <div className="col-span-1 md:col-span-9"><h1 className="text-center text-5xl mb-5">Experiencias Recientes</h1></div>
        {recentExperiences.map(experience=>(
              <div className="col-span-3">
                <Link key={experience._id} href={`/experiences/${encodeURIComponent(experience._id)}`} passHref>
                  <a>
                    <ExperienceCard experience={experience}/>
                  </a>
                </Link>
              </div>
            ))}
          {/* <div className="col-span-3 ">
            <ExperienceCard />
          </div>
          <div className="col-span-3">
            <ExperienceCard />
          </div>
          <div className="col-span-3 ">
            <ExperienceCard />
          </div> */}
        </section>

        <section className="container mx-auto grid grid-cols-1 md:grid-cols-9 gap-4 p-10 md:p-32">
          <div className="col-span-1 md:col-span-9">
            <h1 className="text-center text-5xl mb-5">Ciudades Disponibles</h1>
          </div>
          <Link href="/search-results?keyword=Ciudad+de+México">
            <a className="col-span-1 md:col-span-3">
              <div className="h-64 bg-white rounded-lg text-black shadow-md rounded-xl box-content flex justify-center items-center"
                style={{
                  backgroundImage: "url(" + "/images/cdmx.jpg" + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}>
                <h3 className="text-white font-bold text-5xl text-center">Ciudad de México</h3>
              </div>
            </a>
          </Link>
          <Link href="/search-results?keyword=Monterrey">
            <a className="col-span-1 md:col-span-3">
              <div className="h-64 bg-white rounded-lg text-black shadow-md rounded-xl box-content flex justify-center items-center"
              style={{
                backgroundImage: "url(" + "/images/monterrey.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
                <h3 className="text-white font-bold text-5xl text-center">Monterrey</h3>
              </div>
            </a>
          </Link>
          <Link href="/search-results?keyword=Playa+del+Carmen">
            <a className="col-span-1 md:col-span-3">
              <div className="h-64 bg-white rounded-lg text-black  shadow-md rounded-xl box-content flex justify-center items-center"
              style={{
                backgroundImage: "url(" + "/images/playadelcarmen.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
                <h3 className="text-white font-bold text-5xl text-center">Playa del Carmen</h3>
              </div>
            </a>
          </Link>
        </section>


        <section className="w-screen shadow-2xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
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
            <Link href="/faq">
              <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded" >
                Saber Más
              </button>
            </Link>
            </div>
          </div>
        </div>
        </section>

        <section
        className="md:min-h-screen p-10 md:p-50 flex flex-wrap content-end"
        style={{
          backgroundImage: "url(" + "/images/experience-alex.jpg" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="pt-20  grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          <div >
            <p className="text-white font-light italic md:text-3xl">"Mi experiencia como chef te revelará aspectos únicos de la cultura gastronómica de mi ciudad"</p>
            <p className="text-white font-bold md:text-2xl">Alexander F.</p>
            <p className="text-white font-bold">Chef & Traveler</p>
            <p className="text-white font-bold">San Francisco</p>
          </div>
          <div></div>
          <div></div>
        </div>
        </section>
        <section className="h-auto p-20 flex flex-col space-y-10 bg-gradient-to-b from-red-100 from-purple-100">
          <CallToAction />
        </section>
      </main>
      <Footer/>
    </div>
  )
}
