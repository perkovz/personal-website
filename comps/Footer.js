import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <span>{new Date().getFullYear()} &copy; Zvonimir Perkovic. This site was designed with Figma, built with Next.js, and deployed via Vercel.</span>
      <div className="footer-links">
        <Link href="https://www.linkedin.com/in/zvonimirperkovic">
          <a className="footer-link">LinkedIn</a>
        </Link>
        <Link href="https://www.behance.net/zperkovic">
          <a className="footer-link">Behance</a>
        </Link>
        <Link href="https://dribbble.com/zvonimir_perkovic">
          <a className="footer-link">Dribbble</a>
        </Link>
        <Link href="https://dev.to/zperkovic">
          <a className="footer-link">Dev</a>
        </Link>
        <Link href="https://github.com/perkovz">
          <a className="footer-link">GitHub</a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;