import Head from 'next/head'
import styles from '../../styles/sass/style.scss'

//Components
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function experiencesSingle() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nombre de Experiencia- LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main className="w-screen mx-auto bg-gradient-to-b from-red-100 from-purple-100 grid grid-cols-1 md:grid-cols-6 gap-4">
        <section className="text-left h-auto p-10 md:p-20 flex flex-col  col-span-1 md:col-span-4 md:col-start-2">
          <div className="bg-white p-5 rounded-lg text-black  my-3 shadow rounded-sm m-3">

          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
