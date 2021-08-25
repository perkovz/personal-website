import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Connect = () => {
  return (
    <>
      <Head>
        <title>Zvonimir Perkovic | Connect</title>
        <meta name="keywords" content="Connect me" />
      </Head>
      <header>
        <h1>Connect</h1>
        <p>Connect with me or check out my work on the following platforms</p>
      </header>
      <section>
        <Link href="https://www.linkedin.com/in/zvonimirperkovic">
          <a className={styles.btn} title="Check out my LinkedIn profile.">LinkedIn</a>
        </Link>
        <Link href="https://www.behance.net/zperkovic">
          <a className={styles.btn} title="Check out my Behance page.">Behance</a>
        </Link>
        <Link href="https://dribbble.com/zvonimir_perkovic">
          <a className={styles.btn}>Dribbble</a>
        </Link>
        <Link href="https://dev.to/zperkovic">
          <a className={styles.btn}>Dev</a>
        </Link>
        <Link href="https://github.com/perkovz">
          <a className={styles.btn}>GitHub</a>
        </Link>
      </section>
    </>
  );
}

export default Connect;