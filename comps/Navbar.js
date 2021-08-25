import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      
      <Link href="/"><a className="logo-link"><div className="logo-img"></div></a></Link>
      <Link href="/projects"><a className="nav-link">Projects</a></Link>
      <Link href="/articles/"><a className="nav-link">Articles</a></Link>
      <Link href="/connect"><a className="nav-link">Connect</a></Link>
    </nav>
);
}
 
export default Navbar;