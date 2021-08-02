function Contact() {
  return (
    <section
      className="container flex-1 flex-col m-auto justify-between px-10 py-5 items-start h-screen"
      id="contact"
    >
      <div className="mb-8">
        <form
          name="contact"
          className="m-auto"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>

          <h2 className="text-3xl mb-4 font-medium text-white sm:text-4xl">
            Let's get in touch
          </h2>
          <div className="inline flex gap-x-3 mb-4">
            <a
              href="mailto:ameliawibi@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-400 bg-gray-800 border-0 py-1 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded-xl text-base"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/amelia-wibisono-32314984/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-400 bg-gray-800 border-0 py-1 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded-xl text-base"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/ameliawibi"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-400 bg-gray-800 border-0 py-1 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded-xl text-base"
            >
              Github
            </a>
          </div>
          <p className="mb-8 leading-relaxed">
            Have any questions? You can drop me a message!
          </p>

          <div className="md:w-3/4 lg:w-2/3 xl:w-1/2 mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
              <input
                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-800 text-base text-white outline-none py-1 px-3 leading-8 placeholder-gray-500"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </label>
          </div>
          <div className="md:w-3/4 lg:w-2/3 xl:w-1/2 mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
              <input
                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-800 text-base text-white outline-none py-1 px-3 leading-8 placeholder-gray-500"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
            </label>
          </div>
          <div className="md:w-3/4 lg:w-2/3 xl:w-1/2 mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
              <textarea
                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-800 text-base text-white outline-none py-1 px-3 leading-relaxed placeholder-gray-500"
                name="message"
                rows="6"
                id="message"
                placeholder="Type your message here"
              />
            </label>
          </div>

          <ul className="flex justify-left">
            <li>
              <input
                className="inline-flex text-white bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-500 rounded text-base md:px-6"
                type="submit"
                value="Send"
              />
            </li>
            <li>
              <input
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base md:px-6"
                type="reset"
                value="Clear"
              />
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
}

export default Contact;
