import Head from 'next/head'
import styles from '../../styles/sass/style.scss'
import { useRouter } from 'next/router'
import {useEffect} from 'react'

//Components
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


export default function experiencesSingle({results:experience}) {
  const router = useRouter();
  const { id } = router.query;
  console.log(experience.data)

  return (
    <div className={styles.container}>
      <Head>
        <title>Nombre de Experiencia- LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main className="w-screen mx-auto bg-gradient-to-b from-red-100 from-purple-100 grid grid-cols-1 md:grid-cols-12 gap-4 py-20">
        <section className="text-left h-auto  flex flex-col  col-span-1 md:col-span-7 md:col-start-2">
          <div className="bg-white p-0 rounded-lg text-black  my-3 shadow rounded-sm m-3">

            <div className="h-1/6	col-span-1 md:col-span-2 bg-white py-32 rounded-lg text-black  my-3 shadow-md rounded-xl m-3 box-content "
            style={{
              backgroundImage: `url(${experience.data.experience.imgUrl})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
              <div className="col-span-2 md:col-span-3 p-6">
                <h1 className="text-sm md:text-4xl">{experience.data.experience.title}</h1>
                <p>{experience.data.experience.city}, {experience.data.experience.state}. {experience.data.experience.country}</p>
                {/* <p className="text-sm"><span>🗽 Monumentos</span><span>🌊 Playa</span><span>🍸 Mixology</span></p> */}
              </div>
              <div className="col-span-1 p-6">
              </div>
              <div className="col-span-1 p-6">
                <p className="text-base font-bold">Tipo de Experiencia</p>
                <p>{experience.data.experience.type}</p>
              </div>
              <div className="col-span-1 p-6">
                <p className="text-base font-bold">Duración</p>
                <p>{experience.data.experience.duration}</p>
              </div>
              <div className="col-span-1 p-6">
                <p className="text-base font-bold">Temporada</p>
                <p>{experience.data.experience.season}</p>
              </div>
              <div className="col-span-1 p-6">
                <p className="text-base font-bold">Presupuesto</p>
                <p>{experience.data.experience.budget}</p>
              </div>
              <div className="col-span-4 p-6">
                <p className="text-base font-bold">Recomendaciones</p>
                <p>{experience.data.experience.recommendations}</p>
              </div>
              <div className="col-span-4 p-6">
                <p className="text-base font-bold">La experiencia</p>
                <p className="text-justify p-2">{experience.data.experience.description}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-left h-auto  flex flex-col  col-span-1 md:col-span-3">

          <div className="bg-white p-0 rounded-lg text-black  my-3 shadow rounded-sm">
            <div className="grid grid-cols-1">
              <div className="col-span-1 p-6 flex flex-col items-center">
                <img className="inline object-cover w-16 h-16 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&csName=tinysrgb&h=650&w=940" alt="Profile image"/>
                <p className="font-light">Nombre de Asjgf</p>
                <h1 className="font-bold">🌊 Playa Presentation</h1>
                <p className="text-justify mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac enim malesuada, tempor nisl id, malesuada purus. Donec imperdiet urna in mi venenatis, vitae fringilla dui ornare.</p>
                <button className="bg-purple-600 hover:bg-purple-700 font-bold py-2 px-4 rounded inline-flex items-center mt-4">
                <span className="text-white">
                Donar un Café</span>
              </button>
              </div>
            </div>
          </div>


          <h2 className="mt-4 font-light text-2xl">Experiencia Relacionada</h2>
          <div className="bg-white p-0 rounded-lg text-black  my-3 shadow rounded-sm">

            <div className="grid grid-cols-1">
              <div className="col-span-1 p-6 flex flex-col items-center">
                <img className="inline object-cover w-16 h-16 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                <p className="font-light">Nombre de Asjgf</p>
                <h1 className="font-bold">🌊 Playa Presentation</h1>
                <p className="text-justify mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac enim malesuada, tempor nisl id, malesuada purus. Donec imperdiet urna in mi venenatis, vitae fringilla dui ornare.</p>
                <button className="bg-purple-600 hover:bg-purple-700 font-bold py-2 px-4 rounded inline-flex items-center">
                <span className="text-white">
                Donar un Café</span>
              </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
export async function getServerSideProps(context){
      const res = await fetch(`https://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/experiences/${context.params.id}`)
      console.log(res)
      const json = await res.json()
      const exps = json
      return {
          props:{
              results: exps
          }
      }
  }
