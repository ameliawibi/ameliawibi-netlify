import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Weather from "./components/Weather/Weather";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Experience />
      <Weather />
      <Contact />
    </main>
  );
}

export default App;
