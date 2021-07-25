import React from "react";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About />
      <Experience />
      <Contact />
    </main>
  );
}

export default Home;
