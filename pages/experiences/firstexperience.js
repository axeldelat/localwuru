import Head from 'next/head'
import styles from '../../styles/sass/style.scss'

export default function Experience() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NombreExperiencia - LocalWuru</title>
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
