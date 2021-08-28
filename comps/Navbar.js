import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/"><a className="logo-link"><div className="logo-img"></div></a></Link>
      <Link href="/projects"><a className="nav-link">projects</a></Link>
      {/* <Link href="/articles/"><a className="nav-link">articles</a></Link> */}
      <Link href="/mailto: zperkovi@gmail.com"><a className="nav-link">email</a></Link>
    </nav>
  );
}

export default Navbar;