import Head from 'next/head'
import styles from '../styles/sass/style.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LocalWuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <article class="prose lg:prose-2xl">
        <h1>
          Welcome to LocalWuru
        </h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
</article>
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
