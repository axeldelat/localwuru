import Head from 'next/head'
import styles from '../styles/sass/style.scss'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oops 404 - LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Oops! No Encontrado
        </h1>
      </main>
    </div>
  )
}
