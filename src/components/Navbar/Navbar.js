import {
  AcademicCapIcon,
  ChatAltIcon,
  CloudIcon,
} from "@heroicons/react/solid";

function Navbar() {
  return (
    <section
      id="navbar"
      className="container flex flex-row m-auto px-10 py-5 items-start  md:sticky"
    >
      <div className="flex text-xs md:text-base">
        <a href="#about" className="inline flex mr-3 md:mr-5">
          <AcademicCapIcon className="h-5 w-5 mr-1" />
          About me
        </a>
        <a href="#contact" className="inline flex mr-3 md:mr-5">
          <ChatAltIcon className="h-5 w-5 mr-1" />
          Contact me
        </a>
        <a href="#weather" className="inline flex mr-3 md:mr-5">
          <CloudIcon className="h-5 w-5 mr-1" />
          Weather
        </a>
      </div>
    </section>
  );
}

export default Navbar;
