import "./Aboutme.css";
import { aboutme } from "../data";

function Aboutme() {
  return (
    <section id="aboutme" className="About-container">
      <div id="scrolling-content" className="About-scrolling">
        {aboutme.map((about) => (
          <div key={about.year} className="About">
            <h1>{about.year}</h1>
            <h2>
              {about.chapter} <br /> {about.chaptertitle}
            </h2>
            <p>{about.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Aboutme;
