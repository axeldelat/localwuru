import Head from 'next/head'
import styles from '../styles/sass/style.scss'
import Accordion from '../components/FAQAccordion'

//Components
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Faq() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Preguntas Frecuentes - LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main>
      <section
        className="min-h-screen p-10 flex flex-wrap content-end md:p-20"
        style={{
          backgroundImage: "url(" + "/images/experiencelaura.jpg" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="grid sm:grid-cols-2 md:grid-cols-6 gap-4">
          <div className="sm:col-span-1 md:col-span-3">
            <h2 className=" text-white text-5xl mb-8">Personas únicas compartiendo su pasión local</h2>
            <p className="text-white font-light">Conoce la visión acerca de las experiencias posibles de un lugar a través de personas con perfiles extraordinarios.</p>
            <p className="text-white font-light">Puedes conocer las recomendaciones de una actriz que vive en Nueva York y ha visto  TODAS las Obras de Broadway. O si lo prefieres su recorrido por los monumentos de la gran manzana.</p>
          </div>
          <div className="sm:col-span-1 md:col-start-5 md:col-end-7 flex flex-col justify-end">
            <p className="text-white font-light italic">"Me enorgullese mucho poder mostrar el capital cultural desde mi visión como actriz. Lo que tengo por contarles seguro les encantará"</p>
            <p className="text-white font-bold">Laura E.</p>
            <p className="text-white font-bold">Estudiante de Actuación</p>
            <p className="text-white font-bold">Nueva York</p>
          </div>
        </div>
        </section>
        <section className="mx-auto text-center h-auto p-10 md:p-20 flex flex-col bg-gradient-to-b from-red-100 from-purple-100">
          <h1 className="text-5xl font-bold mb-10">
            Preguntas Frecuentes
          </h1>
          <Accordion/>
          <CallToAction />
        </section>
      </main>
      <Footer/>
    </div>
  )
}
