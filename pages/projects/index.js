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

      <header className="row justify-content-md-center text-center mb-6">
        <div className="col col-lg-8 mb-4">
          <h1 className="text-4xl">Projects</h1>
          <div className="text mb-5">I worked on the projects that scoped from single page apps to large websites culminating my current work for Cleveland Clinic.</div>
        </div>
        <figure>
          <Image src="/design_to_dev_process.jpg" className="img-hero" width={1140} height={617} alt="Figma project full view" />
          <figcaption>How we organized our design to development process.</figcaption>
        </figure>
      </header>

      <section className="mb-7">
        <header className="row justify-content-md-center text-center mb-5">
          <div className="col col-lg-8">
            <h2 className="text-3xl">Design Systems</h2>
            <p>For the past three years most of my focus was on Front-end development. However, in the last two years I started leaning towards design system work.</p>
          </div>
        </header>

        <article className="row mb-6">
          <div className="col col-sm-6 col-lg-4 col-xl-3 align-self-center text-center">
            <div className="card__image">
              <Image className="" src="/bct_mobile.png" layout="fill" objectFit="contain" alt="" />
            </div>
            <h3>System architecture</h3>
            <p>I'm currently a part of the large machinery that runs my.clevelandclinic.org.</p>
          </div>
          <div className="col col-sm-6 col-lg-4 col-xl-3 align-self-center text-center">
            <div className="card__image">
              <Image className="" src="/bct_mobile.png" layout="fill" objectFit="contain" alt="" />
            </div>
            <h3>Component architecture</h3>
            <p>I'm currently a part of the large machinery that runs my.clevelandclinic.org.</p>
          </div>
          <div className="col col-sm-6 col-lg-4 col-xl-3 align-self-center text-center">
            <div className="card__image">
              <Image className="" src="/bct_mobile.png" layout="fill" objectFit="contain" alt="" />
            </div>
            <h3>Style libraries</h3>
            <p>I'm currently a part of the large machinery that runs my.clevelandclinic.org.</p>
          </div>
          <div className="col col-sm-6 col-lg-4 col-xl-3 align-self-center text-center">
            <div className="card__image">
              <Image className="" src="/bct_mobile.png" layout="fill" objectFit="contain" alt="" />
            </div>
            <h3>Documentation</h3>
            <p>I'm currently a part of the large machinery that runs my.clevelandclinic.org.</p>
          </div>
        </article>
        <article className="row">
          <div className="col-12 col-lg-7 align-self-center ">
            <h3>my.clevelandclinic.org design system work</h3>
            <p>I'm currently a part of the large machinery that runs my.clevelandclinic.org. My primary responsibility is front-end development.</p>
            <p>When I'm not developing Sitecore components I creating front-end libraries.</p>
            <p>Design system project is a continous discovery and integration of teams and processes in a multi siloed environment.</p>
            <ul className="bolded-list">
              <li>Tools</li>
              <li>Tokens</li>
              <li>Environments</li>
              <li>Libraries</li>
              <li>Collaboration</li>
            </ul>
          </div>
          <div className="col-12 col-lg-5 align-self-center offgrid">
            <figure className="offgrid-right">
              <Image src="/design_system_workflow_and_tooling.PNG" className="img-hero" width={1140} height={617} alt="Design system workflow and tooling wireframe" />
              <figcaption>Design system discovery process at Cleveland Clinic.</figcaption>
            </figure>
          </div>
        </article>
      </section>

      <section className="mb-7">
        <header className="row justify-content-md-center text-center mb-5">
          <div className="col col-lg-8">
            <h2 className="text-3xl">App Development</h2>
            <p>Throughout my career web development is in the main focus. I've buit front-end any back-end solutions using Umbraco and Sitecore CMS's.</p>
          </div>
        </header>

        <article className="row mb-5">
          <div className="col-12 col-md-6 align-self-center offgrid">
            <figure className="offgrid-left">
              <Image src="/dreambook_hero.png" className="" width={600} height={675} alt="Dreambook feature page." />
            </figure>
          </div>
          <div className="col-12 col-md-6 align-self-center">
            <h3 className="text-2xl">Dream book</h3>
            <p>Somewhere between Pinterest and Houzzz, Dream book was designed and developed for the future homeowners.</p>
            <p>Dream book is a web application that serves as a tool for interior and exterior design, home improvement and idea generation. Main purpose of the app is to streamline the proccess of house design, through visual project management of your dream home.</p>
            <p>My small contribution was UI design and development.</p>
          </div>
        </article>

        <article className="row mb-6">
          <div className="col-12 col-md-6 align-self-center">
            <h3 className="text-2xl">Provider Services</h3>
            <p>Provider Services proprietary software called Cure is a web applicaiton for managing insurance data, patients and long-term care facilities.</p>
            <p>My role in the application update was front-end development, UX/UI design of the new features, and redesign of the current ones. Read the case study here.</p>
          </div>
          <div className="col-12 col-md-6 align-self-center offgrid">
            <figure className="offgrid-right">
              <Image src="/provider_hero.png" className="img-hero" width={900} height={520} alt="Provider services Cure platform dashboard." />
            </figure>
          </div>
        </article>
      </section>

      <section className="row mb-5">
        <div className="col-12">
          <header className="row justify-content-md-center text-center mb-5">
            <div className="col col-lg-8">
              <h2 className="text-3xl">Web Development</h2>
              <p>I need some text in here to balance out the sections.</p>
            </div>
          </header>

          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card text-center">
                <div className="card__image">
                  <Image className="" src="/polychem.jpg" layout="fill" objectFit="contain" alt="" />
                </div>
                <div className="card__title text-xl">Polychem</div>
                <div className="text-base px-2">For the last 3 years I have been working for Cleveland Clinic.</div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card text-center">
                <div className="card__image">
                  <Image className="" src="/bct.jpg" layout="fill" objectFit="contain" alt="" />
                </div>
                <div className="card__title text-xl">BCT Security</div>
                <div className="text-base px-2">Developing both Umbraco back office and front-end of the site. Technologies used: HTML, CSS, JS, VisualStudio, Razor, Umbraco CMS, Git and others.</div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card text-center">
                <div className="card__image">
                  <Image className="" src="/rovisys.jpg" layout="fill" objectFit="contain" alt="" />
                </div>
                <div className="card__title text-xl">Rovisys</div>
                <div className="text-base px-2">https://www.rovisys.com/ is the first web design, front and back-end developemnt project I worked on, and learned most the most about Umbraco .NET development, back-office structure, data types, templates and all other good stuff.</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="row justify-content-center mb-5 p-5 bg-gray">
        <div className="col-12 col-md-8 text-center mb-5">
          <h2 className="text-3xl">Check out my other projects on Behance</h2>
          <div className="">
            <Link href="/projects">
              <a className="btn-link text text-lg" href="https://www.behance.net/zperkovic">go to Behance</a>
            </Link>
          </div>
        </div>
      </section>

      <section className="row mb-5">
        <div className="col-12">
          <header className="row justify-content-md-center text-center mb-5">
            <div className="col col-lg-8">
              <h2 className="text-3xl">Motion Graphics</h2>
              <p>Even though I'm not working as a motion graphics designer for some time now I still feel attachement and attraction towards the motion. Here I would like to share animations made as a part of marketing campaign for DayGlo's EZ pigment. Idea was to represent historical continuum from the very beginnings to the cooperation with Reebok. My roles on the project included art direction, illustration and animation.</p>
            </div>
          </header>

          <div className="row">
            <div className="col-12 col-lg-4 mb-5">
              <div className="text-center">
                <div width="640"
                  height="360" data-embed="JGmYkFWGX7M"><iframe allowFullScreen="" loading="lazy" src="https://www.youtube.com/embed/JGmYkFWGX7M?rel=0&amp;showinfo=0&amp;autoplay=1" srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/JGmYkFWGX7M?rel=0&amp;showinfo=0&amp;autoplay=1><img src=/dglo-1.jpg alt='Dayglo history chapter 1'><span>▶</span></a>" frameBorder="0"></iframe>
                </div>
                <div className="card__title text-xl">DayGlo history Chapter 1</div>
                <div className="text-base px-2">Early days of DayGlo. Exploration and the birth of flourescent pigment.</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5">
              <div className="text-center">
                <div width="640"
                  height="360" data-embed="JGmYkFWGX7M"><iframe allowFullScreen="" loading="lazy" src="https://www.youtube.com/embed/L4pgFWa_thk?rel=0&showinfo=0&autoplay=1" srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/L4pgFWa_thk?rel=0&showinfo=0&autoplay=1><img src=/dglo-2.jpg alt='Dayglo history chapter 2'><span>▶</span></a>" frameBorder="0"></iframe>
                </div>
                <div className="card__title text-xl">DayGlo history Chapter 2</div>
                <div className="text-base px-2">Second stage starting 1946. Dayglo established in Cleveland, OH.</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5">
              <div className="text-center">
                <div width="640"
                  height="360" data-embed="JGmYkFWGX7M"><iframe allowFullScreen="" loading="lazy" src="https://www.youtube.com/embed/fQ6u3IDm9WE?rel=0&showinfo=0&autoplay=1" srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/fQ6u3IDm9WE?rel=0&showinfo=0&autoplay=1><img src=/dglo-3.jpg alt='Dayglo history chapter 3'><span>▶</span></a>" frameBorder="0"></iframe>
                </div>
                <div className="card__title text-xl">DayGlo history Chapter 3</div>
                <div className="text-base px-2">Modern days and the science behind flourescent pigments.</div>
              </div>
            </div>
          </div>

        </div>

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