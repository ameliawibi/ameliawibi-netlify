import React from "react";
import Header from "../../containers/Header/Header";
import Certs from "../../containers/Certs/Certs";
import Whyme from "../../containers/Whyme/Whyme";
import Contact from "../Contact/Contact";
import Aboutme from "../../containers/Aboutme/Aboutme";

function Home() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <Aboutme />
      <Certs />
      <Whyme />
      <Contact />
    </main>
  );
}

export default Home;
