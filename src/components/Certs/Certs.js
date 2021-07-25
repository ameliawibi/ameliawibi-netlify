import { AcademicCapIcon } from "@heroicons/react/solid";
import { certs } from "../data";

function Experience() {
  return (
    <section id="cert" className="container flex m-auto px-10 py-5 items-start">
      <div className="flex-col">
        <p className="inline flex mb-4 mr-3 md:mr-5 leading-relaxed">
          <AcademicCapIcon className="h-5 w-5 mr-1" />
          Things I officially know about
        </p>

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

export default Experience;
