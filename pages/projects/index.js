import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <>
      <Head>
        <title>Zvonimir Perkovic | Projects</title>
        <meta name="keywords" content="Projects" />
      </Head>

      <header className="row justify-content-md-center text-center mb-5">
        <div className="col col-lg-8 mb-4">
          <h1 className="text-4xl">Projects and Case studies</h1>
          <div className="text-xl mb-5">I worked on the projects that scoped from single page apps to large websites culminating my current work for Cleveland Clinic.</div>
        </div>
        <figure>
          <Image src="/design_to_dev_process.jpg" className="img-hero" width={1140} height={617} alt="Figma project full view" />
          <figcaption>How we organized our design to development process.</figcaption>
        </figure>
      </header>

      <section>
        <header className="row justify-content-md-center text-center mb-3">
          <div className="col col-lg-8">
            <h2 className="text-3xl">Design Systems</h2>
            <p>For the past three years most of my focus was on Front-end development. However, in the last two years I started leaning towards design system work.</p>
          </div>
        </header>

        <article className="row">
          <div className="col col-sm-6 col-lg-4 col-xl-3 align-self-center">
            <h3>my.clevelandclinic.org</h3>
            <p>I'm currently a part of the large machinery that runs my.clevelandclinic.org.</p>
          </div>
          <div className="col col-sm-6 col-lg-4 col-xl-3 align-self-center">
            <h3>my.clevelandclinic.org</h3>
            <p>I'm currently a part of the large machinery that runs my.clevelandclinic.org.</p>
          </div>
          <div className="col col-sm-6 col-lg-4 col-xl-3 align-self-center">
            <h3>my.clevelandclinic.org</h3>
            <p>I'm currently a part of the large machinery that runs my.clevelandclinic.org.</p>
          </div>
          <div className="col col-sm-6 col-lg-4 col-xl-3 align-self-center">
            <h3>my.clevelandclinic.org</h3>
            <p>I'm currently a part of the large machinery that runs my.clevelandclinic.org.</p>
          </div>
        </article>
      </section>

      <section>
        <article className="row">
          <div className="col align-self-center">
            <h3>my.clevelandclinic.org</h3>
            <p>I'm currently a part of the large machinery that runs my.clevelandclinic.org.</p>
          </div>
        </article>
        <article className="row">
          <div className="col align-self-center">
            <h3>Dreambook</h3>
            <p>Somewhere between Pinterest and Houzzz, Dream book was designed and developed for the future homeowners.</p>
            <p>Dream book is a web application that serves as a tool for interior and exterior design, home improvement and idea generation. Main purpose of the app is to streamline the proccess of house design, through visual project management of your dream home.</p>
            <p>My small contribution was UI design and development.</p>
          </div>
          <div className="col align-self-center">
            <Image src="/dreambook_hero.png" className="img-hero" width={888} height={1000} alt="Dreambook feature page." />
          </div>
        </article>

        <article className="row">
          <div className="col align-self-center">
            <h3>Provider Services</h3>
            <p>Provider Services proprietary software called Cure is a web applicaiton for managing insurance data, patients and long-term care facilities.</p>
            <p>My role in the application update was front-end development, UX/UI design of the new features, and redesign of the current ones. Read the case study here.</p>
          </div>
          <div className="col align-self-center">
            <Image src="/provider_hero.png" className="img-hero" width={450} height={260} alt="Provider services Cure platform dashboard." />
          </div>
        </article>

        <article className="row">
          <div className="col align-self-center">
            <h3>Rovisys</h3>
            <p>https://www.rovisys.com/ is the first web design, front and back-end developemnt project I worked on, and learned most the most about Umbraco .NET development, back-office structure, data types, templates and all other good stuff.</p>
            <p>Project is currently in the phase of populating product database.</p>
          </div>
          <div className="col align-self-center">

          </div>
        </article>

        <article className="row">
          <div className="col align-self-center">
            <h3>BCT Security</h3>
            <p>Developing both Umbraco back office and front-end of the site. Technologies used: HTML, CSS, JS, VisualStudio, Razor, Umbraco CMS, Git and others.</p>
          </div>
          <div className="col align-self-center">
            <div className="col align-self-center">
              <Image src="/bct_mobile.png" className="img-hero" width={456} height={900} alt="Mobile phone with the BCT services homepage billboard" />
            </div>
          </div>
        </article>

        <article className="row">
          <div className="col align-self-center">
            <h3>Polychem</h3>
            <p>Polychem.com is the first web design, front and back-end developemnt project I worked on, and learned most the most about Umbraco .NET development, back-office structure, data types, templates and all other good stuff.</p>
            <p>Project is currently in the phase of populating product database.</p>
          </div>
          <div className="col align-self-center">
            <div className="col align-self-center">
              <Image src="/polychem_hero.png" className="img-hero" width={1000} height={1400} alt="Tablet with Polychem's product page on the display." />
            </div>
          </div>
        </article>
      </section>

      <section>
        <h2>Motion graphics</h2>
        <p>Even though I'm currently not working as a motion graphics designer I still feel attachement towards the next couple of slides. Here I would like to share animations made as a part of marketing campaign for DayGlo's EZ pigment. Idea was to represent historical continuum from the very beginnings to the cooperation with Reebok. My roles on the project included art direction, illustration and animation.</p>

        <article className="row">
          <div className="col align-self-center"></div>
          <div className="col align-self-center"></div>
          <h3>DayGlo history Chapter 1</h3>
          <p>Role: Art Direction, Illustration, Motion Graphics</p>
          <div className="youtube" data-embed="JGmYkFWGX7M">
            <div className="play-button"></div>
            <img src="https://img.youtube.com/vi/JGmYkFWGX7M/sddefault.jpg" />
          </div>
        </article>

        <article className="row">
          <div className="col align-self-center">
            <h3>DayGlo history Chapter 1</h3>
            <p>Role: Art Direction, Illustration, Motion Graphics</p>
          </div>
          <div className="col align-self-center">
            <div className="youtube" data-embed="L4pgFWa_thk">
              <div className="play-button"></div>
              <img src="https://img.youtube.com/vi/L4pgFWa_thk/sddefault.jpg" />
            </div>
          </div>
        </article>

        <article className="row">
          <div className="col align-self-center"></div>
          <div className="col align-self-center"></div>
          <h3>DayGlo history Chapter 1</h3>
          <p>Role: Art Direction, Illustration, Motion Graphics</p>
          <div className="youtube" data-embed="fQ6u3IDm9WE">
            <div className="play-button"></div>
            <img src="https://img.youtube.com/vi/fQ6u3IDm9WE/sddefault.jpg" />
          </div>
        </article>
      </section>

      <section className="row mb-5">
        <div className="col-12 text-center mb-5">
          <h2 className="text-4xl">Contact me</h2>
          <div className="">
            <Link href="/projects">
              <a className="btn-link text text-lg" href="/mailto:%20zperkovi@gmail.com">via Email here</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;