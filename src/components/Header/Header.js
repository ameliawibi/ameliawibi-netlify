function Header() {
  return (
    <section
      id="header"
      className="container m-auto flex px-10 py-5 flex-col items-center md:flex-row"
    >
      <div className="flex flex-col lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 items-center md:items-start text-center md:text-left mb-16 md:mb-0">
        <h1 className="text-3xl mb-4 font-medium text-white sm:text-4xl">
          Hi, I'm Amelia.
          <br className="lg:inline-block" />I love coding.
        </h1>
        <p className="mb-8 leading-relaxed">
          “Life is a series of building, testing, changing and iterating.”
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-purple-600 border-0 py-2 px-4 focus:outline-none hover:bg-purple-500 rounded text-base md:px-6"
          >
            Contact Me
          </a>
          <a
            href="#experience"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base md:px-6"
          >
            About Me
          </a>
        </div>
      </div>
      <div className="hidden md:block w-1/2 h-1/2">
        <img
          className="object-scale-down object-center rounded"
          alt="joyride"
          src="undraw_Joyride.svg"
        />
      </div>
    </section>
  );
}

export default Header;
