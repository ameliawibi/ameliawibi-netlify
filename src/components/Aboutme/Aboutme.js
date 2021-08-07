import "./Aboutme.css";
import { aboutme } from "../data";

function Aboutme() {
  return (
    <section id="aboutme" className="container py-5 px-10 m-auto">
      <div
        id="scrolling-content"
        className="md:flex overflow-x-scroll hide-scroll-bar"
      >
        {aboutme.map((data) => (
          <div className="md:w-2/5 mb-8 md:m-8 hover:text-white flex-shrink-0">
            <h1 className="text-6xl text-gray-700 tracking-wider">
              {data.year}
            </h1>
            <h2 className="-mt-6 text-2xl">
              {data.chapter} <br /> {data.chaptertitle}
            </h2>
            <p className="ml-2 mt-10">{data.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Aboutme;
