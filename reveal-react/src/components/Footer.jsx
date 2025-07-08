import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">Revelar</div>
        <div className="footer-phrase">Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</div>
        <div className="footer-socials">
          <a href="#" aria-label="Twitter"><FooterIcon bg="#40e0d0"><TwitterIcon /></FooterIcon></a>
          <a href="#" aria-label="Facebook"><FooterIcon bg="#40e0d0"><FacebookIcon /></FooterIcon></a>
          <a href="#" aria-label="Instagram"><FooterIcon bg="#40e0d0"><InstagramIcon /></FooterIcon></a>
          <a href="#" aria-label="Skype"><FooterIcon bg="#40e0d0"><SkypeIcon /></FooterIcon></a>
          <a href="#" aria-label="LinkedIn"><FooterIcon bg="#40e0d0"><LinkedinIcon /></FooterIcon></a>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="footer-copy">
            Copyright <b>Reveal</b> Todos los derechos reservados
          </div>
          <div className="footer-madeby">
            Diseñado por <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">BootstrapMade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ children, bg }) {
  return (
    <span className="footer-icon" style={{ background: bg }}>{children}</span>
  );
}
function TwitterIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M22 5.92a8.38 8.38 0 01-2.36.65A4.13 4.13 0 0021.4 4.1a8.19 8.19 0 01-2.6 1A4.11 4.11 0 0012 8.09v.5A11.65 11.65 0 013 4.89s-4 9 5 13a11.64 11.64 0 01-7 2c9 5.5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A6.72 6.72 0 0022 5.92z" fill="#fff"/></svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="#fff"/></svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#fff" fillOpacity="0.1"/><rect x="2" y="2" width="20" height="20" rx="5" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2"/><circle cx="17" cy="7" r="1.5" fill="#fff"/></svg>
  );
}
function SkypeIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.1"/><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M16.5 13.5c-.5 1-1.5 1.5-3 1.5-2 0-3-1-3-2.5 0-1.5 1-2.5 3-2.5 1.5 0 2.5.5 3 1.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#fff" fillOpacity="0.1"/><rect x="2" y="2" width="20" height="20" rx="5" stroke="#fff" strokeWidth="2"/><path d="M7 10v7M7 7v.01M12 10v7m0 0v-4a2 2 0 114 0v4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
  );
}

export default Footer;