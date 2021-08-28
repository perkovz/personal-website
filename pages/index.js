import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zvonimir Perkovic | Home</title>
        <meta name="keywords" content="Welcome" />
      </Head>

      <header className="row mb-5">
        <div className="col col-xl-8">
          <Image className={styles.profile} src="/profile.jpg" width={96} height={96} alt="profile picture" />
          <h1 className={styles.title}>I design and develop apps, websites, and systems.</h1>
          <p className="text">Over the years, I have had the honor to help clients ranging from startups to large corporations. My core professional interests are Web performance, Design systems, and Web development.</p>
          <p className="text">I am currently working for Cleveland Clinic, where my focus includes Website performance, Design systems, and JAM stack web development.</p>
        </div>
      </header>

      <section className="row mb-5">
        <div className="col-12">
          <h2 className="text-4xl text-center">...from small to big</h2>
          <div className="card__outer">
            <div className="card__inner mb-5">
              <div className="card text-center">
                <div className="card__image">
                  <Image className="" src="/bct_mobile.png" width={228} height={450} layout="fill" objectFit="contain" alt="" />
                </div>
                <div className="card__title text-xl">BCT Alarm systems</div>
                <div className="text-base px-2">For the last 3 years I have been working for Cleveland Clinic.</div>
              </div>
            </div>
            <div className="card__inner mb-5">
              <div className="card text-center">
                <div className="card__image">
                  <Image className="" src="/dreambook_hero.png" width={444} height={500} layout="fill" objectFit="contain" alt="" />
                </div>
                <div className="card__title text-xl">Dream book</div>
                <div className="text-base px-2">For the last 3 years I have been working for Cleveland Clinic.</div>
              </div>
            </div>
            <div className="card__inner mb-5">
              <div className="card text-center">
                <div className="card__image">
                  <Image className="" src="/provider_hero.png" width={500} height={288} layout="fill" objectFit="contain" alt="" />
                </div>
                <div className="card__title text-xl">Provider services</div>
                <div className="text-base px-2">For the last 3 years I have been working for Cleveland Clinic.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row mb-5">
        <header className="col-12">
          <h2 className="text-4xl">And I can help you with</h2>
          <p className="text">I am currently working for Cleveland Clinic, where my focus includes Website performance, Design systems, and JAM stack web development.</p>
        </header>

        <div className="col-12 col-sm-6 col-md-4">
          <h3 className="text-2xl">01. Web Performance</h3>
          <p>test</p>
          <ul className="bolded-list">
            <li>Styleguides and design tokens</li>
            <li>Pattern libraries</li>
            <li>Workflows and processes</li>
            <li>Front-end libraries</li>
            <li>Collaboration and relationships</li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <h3 className="text-2xl">02. Design Systems</h3>
          <p>Introduction paragraph</p>
          <ul className="bolded-list">
            <li>Styleguides and design tokens</li>
            <li>Pattern libraries</li>
            <li>Workflows and processes</li>
            <li>Front-end libraries</li>
            <li>Collaboration and relationships</li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <h3 className="text-2xl">03. Web Development</h3>
          <p>My current interest and focus are JAM Stack Websites. I'm also skilled in the areas bellow:</p>
          <ul className="bolded-list">
            <li>Front-end web development</li>
            <li>Umbraco and Sitecore CMS</li>
            <li>Next.js</li>
            <li>Vanilla JS and jQuery</li>
          </ul>
        </div>
      </section>

      <section className="row mb-5">
        <div className="col-12 mb-5">
          <figure>
            <Image className="" src="/component_architecture.jpg" quality="100" width={1140} height={712} alt="Component architecture in Figma." />
            <figcaption>How we achieve mirroring effect in Figma.</figcaption>
          </figure>
        </div>
        <div className="col-12 text-center mb-5">
          <h2 className="text-4xl">Next</h2>
          <div className="">
            <Link href="/projects">
              <a className="btn-link text text-lg">go to the projects page</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
