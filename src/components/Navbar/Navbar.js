import {
  AcademicCapIcon,
  ChatAltIcon,
  CloudIcon,
} from "@heroicons/react/solid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "../../containers/Home/Home";
import Contact from "../../containers/Contact/Contact";
import Weather from "../../containers/Weather/Weather";

function Navbar() {
  return (
    <Router>
      <section
        id="navbar"
        className="container flex flex-row m-auto px-10 py-5 items-start  md:sticky"
      >
        <div className="flex text-xs md:text-base">
          <Link to="/aboutme" className="inline flex mr-3 md:mr-5">
            <AcademicCapIcon className="h-5 w-5 mr-1" />
            About me
          </Link>
          <Link to="/contact" className="inline flex mr-3 md:mr-5">
            <ChatAltIcon className="h-5 w-5 mr-1" />
            Contact me
          </Link>
          <Link to="/weather" className="inline flex mr-3 md:mr-5">
            <CloudIcon className="h-5 w-5 mr-1" />
            Weather
          </Link>
        </div>
      </section>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/aboutme" />}>
          <Home />
        </Route>
        <Route exact path="/aboutme">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/weather">
          <Weather />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
