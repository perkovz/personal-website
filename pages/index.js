import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zvonimir Perkovic | Home</title>
        <meta name="keywords" content="personal website, portfolio" />
        <meta name="description" content="Hi and welcome to my portfolio site. My name is Zvonimir, I'm a Front-end developer from Osijek, Croatia living and workig in Cleveland, Ohio." />
      </Head>

      <header className="row mb-5">
        <div className="col col-xl-8">
          <Image className={styles.profile} src="/profile.jpg" width={96} height={96} alt="profile picture" />
          <h1 className={styles.title}>I design and develop apps, websites, and systems.</h1>
          <p className="text">Throughout my career, I have had the honor to help clients ranging from startups to large corporations. I am currently working for Cleveland Clinic, where my focus includes Front-end Sitecore development.</p>
          <p className="text">My core professional interests include Website performance, Design systems, and JAM stack.</p>
        </div>
      </header>

      <section className="row mb-5">
        <div className="col-12">
          <h2 className="text-4xl text-center">Diversified experience</h2>

          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4 mb-5">
              <div className="card text-center">
                <div className="card__image">
                  <Image className="" src="/bct_mobile.png" layout="fill" objectFit="contain" alt="Website landing page on mobile view." />
                </div>
                <div className="card__title text-xl">Umbraco and Sitecore CMS development</div>
                <div className="text-base px-2">I started with, built, and maintained dozens of websites built with Umbraco and Sitecore CMS's. My main contribution was the front-end and development of the back office items and components.</div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 mb-5">
              <div className="card text-center">
                <div className="card__image">
                  <Image className="" src="/dreambook_hero.png" layout="fill" objectFit="contain" alt="Product landing page" />
                </div>
                <div className="card__title text-xl">UX, motion and product design</div>
                <div className="text-base px-2">I have designed and help develop several custom web applications, animations, and style guides, creating cohesive visual guidelines focusing on accessibility and scalability.</div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card text-center">
                <div className="card__image">
                  <Image className="" src="/provider_hero.png" layout="fill" objectFit="contain" alt="Dashboard of web application" />
                </div>
                <div className="card__title text-xl">Highly collaborative corporate solutions</div>
                <div className="text-base px-2">I worked on projects that included multiple teams on multiple continents. I've created and improved processes that stretched from content engineering through design systems to front-end development.</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="row mb-5">
        <header className="col-12">
          <h2 className="text-4xl">Current focus</h2>
          <p className="text">I support projects and teams requiring applied knowledge of website performance, design systems, or JAM stack, and strong communication, facilitation, and organizational understanding.</p>
        </header>

        <div className="col-12 col-sm-6 col-md-4">
          <h3 className="text-2xl">01. Web Performance</h3>
          <p>Together with accessibility, performance is my first professional passion. Some tasks I enjoy doing are:</p>
          <ul className="bolded-list">
            <li>Analysis and interpretation of speed test results</li>
            <li>Optimizing JS and CSS</li>
            <li>Optimizing third-party resources and fonts</li>
            <li>Developing and designing for performance</li>
            <li>Building performance-based culture</li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <h3 className="text-2xl">02. Design Systems</h3>
          <p>Design systems work allows me to use my innate talents to look at the bigger picture, creating and implementing resources, processes, tools, and documentation supporting the design system:</p>
          <ul className="bolded-list">
            <li>Styleguides and design tokens</li>
            <li>Pattern libraries</li>
            <li>Workflows and processes</li>
            <li>Front-end libraries</li>
            <li>Collaboration and relationships</li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <h3 className="text-2xl">03. JAM Stack</h3>
          <p>JAM stack development is my newest passion. Currently working on smaller to mid-size projects using:</p>
          <ul className="bolded-list">
            <li>Next.js</li>
            <li>Eleventy</li>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>Contentful</li>
          </ul>
        </div>
      </section>

      <section className="row mb-5">
        <div className="col-12 mb-5">
          <figure>
            <Image className="" src="/component_architecture.jpg" quality="100" width={1140} height={712} alt="Component architecture in Figma." />
            <figcaption>Mirroring effect between Figma styleguide and front-end library.</figcaption>
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
