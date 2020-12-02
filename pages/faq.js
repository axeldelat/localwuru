import Head from 'next/head'
import styles from '../styles/sass/style.scss'
import Accordion from '../components/FAQAccordion'

export default function Faq() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Preguntas Frecuentes - LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-gray-800">
          Preguntas Frecuentes
        </h1>
        <Accordion/>
      </main>
    </div>
  )
}
