import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <span className="copyright">{new Date().getFullYear()} &copy; Zvonimir Perkovic. Designed with Figma, built with Next.js, and deployed via Vercel.</span>
      <div className="footer-links">
        <Link href="https://www.linkedin.com/in/zvonimirperkovic">
          <a className="footer-link" target="_blank" rel="noreferrer">linkedin</a>
        </Link>
        <Link href="https://www.behance.net/zperkovic">
          <a className="footer-link" target="_blank" rel="noreferrer">behance</a>
        </Link>
        <Link href="https://dribbble.com/zvonimir_perkovic">
          <a className="footer-link" target="_blank" rel="noreferrer">dribbble</a>
        </Link>
        <Link href="https://dev.to/zperkovic">
          <a className="footer-link" target="_blank" rel="noreferrer">dev</a>
        </Link>
        <Link href="https://github.com/perkovz">
          <a className="footer-link" target="_blank" rel="noreferrer">github</a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;