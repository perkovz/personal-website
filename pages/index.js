import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zvonimir Perkovic | Home</title>
        <meta name="keywords" content="Welcome" />
      </Head>
      <div>
        <Image className={styles.profile} src="/profile.jpg" width={64} height={64} alt="profile picture" />
        <h1 className={styles.title}>I design and develop apps, websites, and systems.</h1>
        <p className={styles.text}>Over the years, I have had the honor to help clients ranging from startups to large corporations. My core professional interests are Front-end web development, Product Design, and Design Systems.</p>
        <p className={styles.text}>I am currently working for Cleveland Clinic, where my focus includes Website performance, Design systems, and JAM stack.</p>

        <section>
          <h2>More content about me. This page should be about my skills, stenghts and passions.</h2>
        </section>

        <Link href="/articles/">
          <a className={styles.btn}>Articles</a>
        </Link>
        <Link href="/projects/">
          <a className={styles.btn}>Projects</a>
        </Link>
      </div>
    </>
  )
}
