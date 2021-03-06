import Head from 'next/head'
import styles from '../styles/sass/style.scss'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oops 404 - LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="h-screen w-screen bg-gray-100 flex items-center">
          <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
              <div className="max-w-md">
                  <div className="text-5xl font-dark font-bold">404</div>
                    <p
                      className="text-2xl md:text-3xl font-light leading-normal"
                    >¡Lo sentimos! No pudimos encontrar esta página. </p>
                  <p className="mb-8">¡Pero no te preocupes! Aún puedes hacer muchas cosas en nuestra página de inicio.</p>
                  <Link href="/"><a><button className="px-4 inline py-2 text-sm font-medium leading-5 shadow bg-purple-600 text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-purple bg-purple-600 active:bg-purple-600 hover:bg-purple-700">De vuelta al inicio</button></a></Link>
              </div>
              <div className="max-w-lg">
              <img src="/images/thegroup.svg"></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
