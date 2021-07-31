function Contact() {
  return (
    <section
      className="container m-auto flex px-10 py-5 flex-col items-center lg:flex-row"
      id="contact"
    >
      <div className="mb-8">
        <form
          name="contact"
          className="m-auto"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>

          <h2 className="text-3xl mb-4 font-medium text-white sm:text-4xl">
            Let's get in touch
          </h2>
          <p className="mb-8 leading-relaxed">
            Have any questions? You can drop me a message!
          </p>

          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
              <input
                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-800 text-base text-white outline-none py-1 px-3 leading-8"
                type="text"
                name="name"
                id="name"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
              <input
                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-800 text-base text-white outline-none py-1 px-3 leading-8"
                type="text"
                name="email"
                id="email"
              />
            </label>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
              <textarea
                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-800 text-base text-white outline-none py-1 px-3 leading-relaxed"
                name="message"
                rows="6"
                id="message"
              />
            </label>
          </div>

          <ul className="flex justify-left">
            <li>
              <input
                className="inline-flex text-white bg-purple-600 border-0 py-2 px-4 focus:outline-none hover:bg-purple-500 rounded text-base md:px-6"
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

      <div className="flex flex-col lg:flex-grow items-center">
        <h3>Connect via Email</h3>
        <h3>Connect via Linkedin</h3>
        <h3>Connect via Github</h3>
      </div>
    </section>
  );
}

export default Contact;
