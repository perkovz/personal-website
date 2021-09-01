import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <span className="copyright">{new Date().getFullYear()} &copy; Zvonimir Perkovic. Designed with Figma, built with Next.js, and deployed via Vercel.</span>
      <div className="footer-links">
        <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zvonimirperkovic">linkedin</a>
        <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.behance.net/zperkovic">behance</a>
        <a className="footer-link" target="_blank" rel="noreferrer" href="https://dribbble.com/zvonimir_perkovic">dribbble</a>
        <a className="footer-link" target="_blank" rel="noreferrer" href="https://dev.to/zperkovic">dev</a>
        <a className="footer-link" target="_blank" rel="noreferrer" href="https://github.com/perkovz">github</a>
      </div>
    </footer>
  );
}

export default Footer;