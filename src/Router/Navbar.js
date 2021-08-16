import {
  HomeIcon,
  ChatAltIcon,
  CloudIcon,
  SparklesIcon,
} from "@heroicons/react/solid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Weather from "../pages/Weather/Weather";
import PageUI from "../pages/PageUI/PageUI";

function Navbar() {
  return (
    <Router>
      <section
        id="navbar"
        className="container flex flex-row m-auto px-10 py-5 items-start bg-gray-900"
      >
        <div className="flex text-xs md:text-base">
          <p className="hidden md:block font-medium text-white px-4 border-r border-gray-700">
            Amelia Wibi
          </p>
          <Link to="/home" className="inline flex mx-3 md:mr-5">
            <HomeIcon className="h-5 w-5 mr-1" />
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
          <Link to="/ui" className="inline flex mr-3 md:mr-5">
            <SparklesIcon className="h-5 w-5 mr-1" />
            UI
          </Link>
        </div>
      </section>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />}>
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
