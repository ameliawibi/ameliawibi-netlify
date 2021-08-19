import {
  HomeIcon,
  ChatAltIcon,
  CloudIcon,
  SparklesIcon,
} from "@heroicons/react/solid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Weather from "../pages/Weather/Weather";
import PageUI from "../pages/PageUI/PageUI";
import "./Navbar.css";

function Navbar() {
  return (
    <Router>
      <section id="navbar" className="Nav-container">
        <div className="Nav">
          <p>Amelia Wibi</p>
          <Link to="/home" className="Nav-link">
            <HomeIcon className="Nav-icon" />
            About
          </Link>
          <Link to="/contact" className="Nav-link">
            <ChatAltIcon className="Nav-icon" />
            Contact
          </Link>
          <Link to="/weather" className="Nav-link">
            <CloudIcon className="Nav-icon" />
            Weather
          </Link>
          <Link to="/ui" className="Nav-link">
            <SparklesIcon className="Nav-icon" />
            UI
          </Link>
        </div>
      </section>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/weather">
          <Weather />
        </Route>
        <Route exact path="/ui">
          <PageUI />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
