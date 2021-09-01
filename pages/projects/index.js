import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <>
      <Head>
        <title>Zvonimir Perkovic | Projects</title>
        <meta name="keywords" content="projects, design system, ux design, web development" />
        <meta name="description" content="My current design system project at Cleveland Clinic, and some older UX, web development and motion graphics work." />
      </Head>

      <header className="row justify-content-md-center text-center mb-6">
        <div className="col col-lg-8 mb-4">
          <h1 className="text-4xl">Projects</h1>
          <div className="text mb-5">I worked on the projects that scoped from small single-page apps to huge data-driven websites, culminating my current work for Cleveland Clinic. As you scroll down the page, you will be taken back in time, from the most recent to my older projects.</div>
        </div>
        <figure>
          <Image src="/design_to_dev_process.jpg" className="img-hero" width={1140} height={617} alt="Figma project full view" />
          <figcaption>An example of design to development process.</figcaption>
        </figure>
      </header>

      <section className="mb-7">
        <header className="row justify-content-md-center text-center mb-5">
          <div className="col col-lg-8">
            <h2 className="text-3xl">Design Systems</h2>
            <p>A design system is a set of processes where designers and developers do their best work creating scalable collections of reusable patterns organized in styles and components. I think that sums it up :)</p>
          </div>
        </header>

        <article className="row mb-6">
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-5 text-center">
            <div className="card__image">
              <Image className="" src="/systems-architecture.png" layout="fill" objectFit="contain" alt="Image of mobile phone with a list on the screen." />
            </div>
            <h3>System architecture</h3>
            <p>Applying systematic thinking to anticipate how a system will be used and predicting future needs.</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-5 text-center">
            <div className="card__image">
              <Image className="" src="/patterns-libraries.png" layout="fill" objectFit="contain" alt="Image of mobile phone with the Figma library dashboard on the screen." />
            </div>
            <h3>Patterns and libraries</h3>
            <p>Recognizing patterns across multiple products and style guides and creating component libraries that match those patterns.</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-5 text-center">
            <div className="card__image">
              <Image className="" src="/collaboration.png" layout="fill" objectFit="contain" alt="Image of mobile phone with description of the team on the screen." />
            </div>
            <h3>Communication and collaboration</h3>
            <p>Caring about helping and mentoring other designers and working closely with developers, articulately sharing ideas and business needs. </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3 text-center">
            <div className="card__image">
              <Image className="" src="/documentation.png" layout="fill" objectFit="contain" alt="Image of mobile phone with asset library on the screen." />
            </div>
            <h3>Documentation</h3>
            <p>Organizing and documenting past, present, and future design systems work.</p>
          </div>
        </article>
        <article className="row">
          <div className="col-12 col-lg-7 align-self-center ">
            <h3 className="text-2xl">Design systems in progress</h3>
            <p>At the Cleveland Clinic, we started the design system discovery process a year and a half ago. On that path, we encountered all the challenges one might expect from a multi-siloed environment of considerable size:</p>
            <ul className="bolded-list">
              <li>uncontrolably large product inventory</li>
              <li>collaboration issues</li>
              <li>clashing priorities</li>
              <li>diverse tech stack</li>
              <li>lack of design system experience</li>
            </ul>
            <p>We learned and are still learning while working on the large machinery that is <a href="my.clevelandclinic.org/" target="_blank" rel="noopener noreferrer">my.clevelandclinic.org</a>.</p>
          </div>
          <div className="col-12 col-lg-5 align-self-center offgrid">
            <figure className="offgrid-right">
              <Image src="/design_system_workflow_and_tooling.PNG" className="img-hero" width={1140} height={617} alt="Design system workflow and tooling wireframe" />
              <figcaption>Design system discovery process.</figcaption>
            </figure>
          </div>
        </article>
      </section>

      <section className="mb-7">
        <header className="row justify-content-md-center text-center mb-5">
          <div className="col col-lg-8">
            <h2 className="text-3xl">Product Design and Development</h2>
            <p>I was responsible for creating, iterating, and delivering visual journeys that provided delightful experiences to our users and visitors. Paired with a back-end developer, we solved complex problems in the residential construction and facility management spaces.</p>
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
            <p>Somewhere between Pinterest and Houzz, <a href="http://dreambook.us/" target="_blank" rel="noreferrer">Dream book</a> was designed and developed for future homeowners.</p>
            <p>Dream book is a web application that serves as a tool for interior and exterior design, home improvement, and idea generation. The app's primary purpose is to streamline house design through visual project management of your dream home.</p>
            <p><a href="https://www.behance.net/gallery/73263457/Dream-book-web-app-Case-Study" target="_blank" rel="noreferrer">My small contribution</a> consisted of:</p>
            <ul className="bolded-list">
              <li>UI design (Adobe XD)</li>
              <li>UI development (JavaScript, jQuery)</li>
            </ul>
          </div>
        </article>

        <article className="row mb-6">
          <div className="col-12 col-md-6 align-self-center">
            <h3 className="text-2xl">Provider Services</h3>
            <p>Provider Services proprietary software called Cure is a web application for managing insurance data, patients, and long-term care facilities.</p>
            <p>My role in the application update was front-end development, UX, and UI design. <a href="https://www.behance.net/gallery/73221473/Cure-Webapp-UX-Design-Case-Study" target="_blank" rel="noreferrer">Read the case study here.</a></p>
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
              <p>As a part of an agile development team at Cleveland Clinic, I'm building and working on enterprise-grade software systems built on top of the Microsoft .NET stack. As a front-end developer, I believe in web standards, performance, and accessibility to create more inclusive and faster experiences for our visitors.</p>
            </div>
          </header>

          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4 mb-5">
              <div className="card text-center">
                <div className="card__image">
                  <Image className="" src="/polychem.jpg" layout="fill" objectFit="contain" alt="Product landing page" />
                </div>
                <div className="card__title text-xl">Polychem</div>
                <div className="text-base px-2">Polychem.com was my first agency project. I worked on web design, front-end, and Umbraco back-end development. Polychem.com was also the first product-oriented website I have built.</div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mb-5">
              <div className="card text-center">
                <div className="card__image">
                  <Image className="" src="/bct.jpg" layout="fill" objectFit="contain" alt="Home page with the billboard" />
                </div>
                <div className="card__title text-xl">BCT Security</div>
                <div className="text-base px-2">Smaller in scale but similar in the tech stack. I developed both the Umbraco back-office and front-end for the BCT Security website. This was the first time I had embedded dynamic Google maps inside the CMS.</div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card text-center">
                <div className="card__image">
                  <Image className="" src="/rovisys.jpg" layout="fill" objectFit="contain" alt="Home page with the billboard" />
                </div>
                <div className="card__title text-xl">Rovisys</div>
                <div className="text-base px-2">Rovisys was my last web development project before joining the Cleveland Clinic. At some point in time, every page on the website was loading under 2s.</div>
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
              <p>Even though I'm no longer working as a motion graphics designer, I still feel attachment and attraction towards my old projects. I want to share three short animated movies we made for DayGlo's color corp. The idea was to represent a historical continuum from the very beginnings to the cooperation with Reebok. My roles in the project included art direction, illustration, and animation.</p>
            </div>
          </header>

          <div className="row">
            <div className="col-12 col-lg-4 mb-5">
              <div className="text-center">
                <div width="640"
                  height="360" data-embed="JGmYkFWGX7M"><iframe allowFullScreen="" loading="lazy" src="https://www.youtube.com/embed/JGmYkFWGX7M?rel=0&amp;showinfo=0&amp;autoplay=1" srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/JGmYkFWGX7M?rel=0&amp;showinfo=0&amp;autoplay=1><img src=/dglo-1.jpg alt='Dayglo history chapter 1'><span>▶</span></a>" frameBorder="0"></iframe>
                </div>
                <div className="card__title text-xl">DayGlo history chapter 1</div>
                <div className="text-base px-2">Early days of DayGlo. Exploration and the birth of fluorescent pigment.</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5">
              <div className="text-center">
                <div width="640"
                  height="360" data-embed="JGmYkFWGX7M"><iframe allowFullScreen="" loading="lazy" src="https://www.youtube.com/embed/L4pgFWa_thk?rel=0&showinfo=0&autoplay=1" srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/L4pgFWa_thk?rel=0&showinfo=0&autoplay=1><img src=/dglo-2.jpg alt='Dayglo history chapter 2'><span>▶</span></a>" frameBorder="0"></iframe>
                </div>
                <div className="card__title text-xl">DayGlo history chapter 2</div>
                <div className="text-base px-2">Second stage starting 1946. Dayglo was established in Cleveland, OH.</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5">
              <div className="text-center">
                <div width="640"
                  height="360" data-embed="JGmYkFWGX7M"><iframe allowFullScreen="" loading="lazy" src="https://www.youtube.com/embed/fQ6u3IDm9WE?rel=0&showinfo=0&autoplay=1" srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/fQ6u3IDm9WE?rel=0&showinfo=0&autoplay=1><img src=/dglo-3.jpg alt='Dayglo history chapter 3'><span>▶</span></a>" frameBorder="0"></iframe>
                </div>
                <div className="card__title text-xl">DayGlo history chapter 3</div>
                <div className="text-base px-2">Modern days and the science behind fluorescent pigments.</div>
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