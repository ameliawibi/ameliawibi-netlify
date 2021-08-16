import "./Header.css";
import { intro } from "../data";
import Button from "../../components/Button";
import { PRIMARY, SECONDARY } from "../../components/Button/Button";

function Header() {
  return (
    <section
      id="header"
      className="container m-auto flex px-10 py-5 flex-col items-center md:flex-row"
    >
      <div className="flex flex-col lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 items-center md:items-start text-center md:text-left mb-16 md:mb-0">
        <h1 className="text-3xl mb-4 font-medium text-white sm:text-4xl">
          {intro.line1}
          <br className="lg:inline-block" />
          {intro.line2}
        </h1>
        <p className="mb-8 leading-relaxed">{intro.line3}</p>
        <div className="flex justify-center gap-x-4 inline-flex">
          <Button variant={PRIMARY}>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant={SECONDARY}>
            <a href="#whyme">Why me</a>
          </Button>
        </div>
      </div>
      <div className="hidden md:block w-1/2 h-1/2">
        <img
          className="animateit object-scale-down object-center rounded"
          alt="joyride"
          src="undraw_Joyride.svg"
        />
      </div>
    </section>
  );
}

export default Header;
