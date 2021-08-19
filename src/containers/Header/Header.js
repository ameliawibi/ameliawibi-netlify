import "./Header.css";
import { intro } from "../data";
import Button from "../../components/Button";
import { PRIMARY, SECONDARY } from "../../components/Button/Button";

function Header() {
  return (
    <section id="header" className="Header-container">
      <div className="Header">
        <h1>
          {intro.line1}
          <br />
          {intro.line2}
        </h1>
        <p>{intro.line3}</p>
        <div className="Header-button-div">
          <Button variant={PRIMARY}>
            <a href="#contact">Contact me</a>
          </Button>
          <Button variant={SECONDARY}>
            <a href="#whyme">Why me</a>
          </Button>
        </div>
      </div>
      <div className="Header-image">
        <img alt="joyride" src="undraw_Joyride.svg" />
      </div>
    </section>
  );
}

export default Header;
