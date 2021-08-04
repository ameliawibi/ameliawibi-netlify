import React from "react";
import Header from "../../components/Header/Header";
import Certs from "../../components/Certs/Certs";
import Whyme from "../../components/Whyme/Whyme";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <Certs />
      <Whyme />
      <Contact />
    </main>
  );
}

export default Home;
