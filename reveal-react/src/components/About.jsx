import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-img">
          <img src="https://bootstrapmade.com/demo/templates/Reveal/assets/img/about.jpg" alt="About" />
        </div>
        <div className="about-content">
          <h3>Voluptatem dignissimos provident</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="about-list">
            <li><CheckIcon /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><CheckIcon /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><CheckIcon /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px', verticalAlign: 'middle'}}>
      <circle cx="10" cy="10" r="10" fill="#007bff"/>
      <path d="M6 10.5L9 13.5L14 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default About; 