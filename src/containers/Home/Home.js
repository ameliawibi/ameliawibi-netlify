import React from "react";
import Header from "../../components/Header/Header";
import Certs from "../../components/Certs/Certs";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <Certs />
      <Contact />
    </main>
  );
}

export default Home;
