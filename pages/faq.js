import Head from 'next/head'
import styles from '../styles/sass/style.scss'

export default function Faq() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Preguntas Frecuentes - LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Preguntas Frecuentes
        </h1>
      </main>
    </div>
  )
}
