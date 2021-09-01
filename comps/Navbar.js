import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/"><a className="logo-link" aria-label="logo"><div className="logo-img"></div></a></Link>
      <Link href="/projects"><a className="nav-link">projects</a></Link>
      {/* <Link href="/articles/"><a className="nav-link">articles</a></Link> */}
      <a className="nav-link" href="mailto:zperkovi@gmail.com">email</a>
    </nav>
  );
}

export default Navbar;