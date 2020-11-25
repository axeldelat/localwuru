import Head from 'next/head'
import styles from '../styles/sass/style.scss'

export default function NewExperience() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crear Nueva Experiiencia - LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          New Experience
        </h1>
      </main>
    </div>
  )
}
