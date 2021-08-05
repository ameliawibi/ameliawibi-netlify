import React from "react";
import Header from "../../components/Header/Header";
import Certs from "../../components/Certs/Certs";
import Whyme from "../../components/Whyme/Whyme";
import Contact from "../Contact/Contact";
import Aboutme from "../../components/Aboutme/Aboutme";

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
