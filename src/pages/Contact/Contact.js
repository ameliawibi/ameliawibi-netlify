import { useForm } from "react-hook-form";
import { social } from "../../containers/data";

/* eslint-disable react/jsx-props-no-spreading */
function Contact() {
  const { register, formState, clearErrors } = useForm({
    mode: "onChange",
  });

  const { isValid, touchedFields, errors } = formState;

  const getButtonEnableDisable = () =>
    isValid ? " bg-indigo-500 hover:bg-indigo-500" : " bg-gray-800 opacity-25";

  return (
    <section
      className="container flex-1 flex-col m-auto justify-between px-10 py-5 items-start min-h-screen"
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
            {social.map((socials) => (
              <a
                href={socials.link}
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-400 bg-gray-800 border-0 py-1 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded-xl text-base"
              >
                {socials.text}
              </a>
            ))}
          </div>
          <p className="mb-8 leading-relaxed">
            Have any questions? You can drop me a message!
          </p>
          <div className="md:w-3/4 lg:w-2/3 xl:w-1/2 mb-4">
            <label className="leading-7 text-sm text-gray-400">
              Name
              <input
                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-800 text-base text-white outline-none py-1 px-3 leading-8 placeholder-gray-500"
                name="name"
                type="text"
                id="name"
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </label>
            {errors.name && touchedFields.name && (
              <span className="text-sm text-red-400">
                This field is required
              </span>
            )}
          </div>
          <div className="md:w-3/4 lg:w-2/3 xl:w-1/2 mb-4">
            <label className="leading-7 text-sm text-gray-400">
              Email
              <input
                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-800 text-base text-white outline-none py-1 px-3 leading-8 placeholder-gray-500"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && touchedFields.email && (
              <span className="text-sm text-red-400">
                This field is required
              </span>
            )}
          </div>
          <div className="md:w-3/4 lg:w-2/3 xl:w-1/2 mb-4">
            <label className="leading-7 text-sm text-gray-400">
              Message
              <textarea
                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-800 text-base text-white outline-none py-1 px-3 leading-relaxed placeholder-gray-500"
                name="message"
                rows="6"
                id="message"
                placeholder="Type your message here"
                {...register("message", { required: true })}
              />
            </label>
            {errors.message && touchedFields.message && (
              <span className="text-sm text-red-400">
                This field is required
              </span>
            )}
          </div>
          <ul className="flex justify-left">
            <li>
              <input
                className={
                  // eslint-disable-next-line
                  "inline-flex text-white border-0 py-2 px-4 focus:outline-none rounded text-base md:px-6" +
                  getButtonEnableDisable()
                }
                type="submit"
                value="Send"
                disabled={!isValid}
              />
            </li>
            <li>
              <input
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base md:px-6"
                type="reset"
                value="Clear"
                onClick={() => {
                  clearErrors();
                }}
              />
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
}

export default Contact;
