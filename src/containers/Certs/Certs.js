import { certs } from "../data";
import "./Certs.css";

function Certs() {
  return (
    <section id="cert" className="Certs-container">
      <div className="Certs-header">
        <h1>
          Things I officially know about.
          <br />
          (but Coding Ain't One)
        </h1>

        <div className="Certs-grid">
          {certs.map((cert) => (
            <a
              href={cert.link}
              key={cert.image}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt={cert.alt} className={cert.style} src={cert.image} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certs;
