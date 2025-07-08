import './Services.css';

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="services-grid">
          <ServiceItem icon={<BriefcaseIcon />} title="Lorem Ipsum" desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" />
          <ServiceItem icon={<BarChartIcon />} title="Dolor Sitema" desc="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata" />
          <ServiceItem icon={<CalendarIcon />} title="Sed ut perspiciatis" desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
          <ServiceItem icon={<PaintIcon />} title="Magni Dolores" desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
          <ServiceItem icon={<DatabaseIcon />} title="Nemo Enim" desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque" />
          <ServiceItem icon={<WorldIcon />} title="Eiusmod Tempor" desc="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi" />
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ icon, title, desc }) {
  return (
    <div className="service-item">
      <div className="service-icon">{icon}</div>
      <div>
        <h4 className="service-title">{title}</h4>
        <p className="service-desc">{desc}</p>
      </div>
    </div>
  );
}

// SVG Icons
function BriefcaseIcon() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" fill="#007bff"/><rect x="8" y="3" width="8" height="4" rx="1" fill="#0056b3"/><rect x="3" y="7" width="18" height="13" rx="2" stroke="#fff" strokeWidth="1.5"/><rect x="8" y="3" width="8" height="4" rx="1" stroke="#fff" strokeWidth="1.5"/></svg>
  );
}
function BarChartIcon() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="13" width="3" height="7" rx="1" fill="#007bff"/><rect x="10.5" y="9" width="3" height="11" rx="1" fill="#0056b3"/><rect x="17" y="5" width="3" height="15" rx="1" fill="#007bff"/></svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" fill="#007bff"/><rect x="3" y="9" width="18" height="2" fill="#0056b3"/><rect x="3" y="5" width="18" height="16" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
  );
}
function PaintIcon() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="9" ry="7" fill="#007bff"/><ellipse cx="12" cy="12" rx="9" ry="7" stroke="#fff" strokeWidth="1.5"/><circle cx="12" cy="12" r="2.5" fill="#fff"/></svg>
  );
}
function DatabaseIcon() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="9" ry="3" fill="#007bff"/><rect x="3" y="6" width="18" height="12" rx="3" fill="#0056b3"/><ellipse cx="12" cy="18" rx="9" ry="3" fill="#007bff"/></svg>
  );
}
function WorldIcon() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#007bff"/><ellipse cx="12" cy="12" rx="7" ry="10" fill="#0056b3"/><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.5"/></svg>
  );
}

export default Services; 