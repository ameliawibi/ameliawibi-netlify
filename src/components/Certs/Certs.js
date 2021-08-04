import { certs } from "../data";

function Certs() {
  return (
    <section id="cert" className="container flex m-auto px-10 py-5 items-start">
      <div className="flex-col text-center md:text-left">
        <h1 className="text-2xl mb-4 font-medium items-start text-white sm:text-3xl">
          Things I officially know about.
          <br className="lg:inline-block" />
          (but Coding Ain't One)
        </h1>

        <div className="mb-4 grid grid-cols-3 md:grid-cols-5 flex flex-row justify-center">
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
