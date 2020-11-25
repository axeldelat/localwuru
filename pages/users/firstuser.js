import Head from 'next/head'
import styles from '../../styles/sass/style.scss'

export default function User() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Usuario - LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          User
        </h1>
      </main>
    </div>
  )
}
