import { whyme } from "../data";

function Whyme() {
  return (
    <section
      className="container flex-1 flex-col m-auto justify-center px-10 py-5"
      id="whyme"
    >
      <div className="flex flex-col lg:flex-grow lg:pr-24 md:pr-8 mb-8 ">
        <h1 className="text-2xl mb-4 font-medium text-center md:text-left text-white sm:text-3xl">
          Why me?
        </h1>
        <ul className="leading-relaxed inline-grid grid-cols-1 md:grid-cols-3 gap-4">
          {whyme.map((data) => (
            <li
              key={data.id.toString()}
              className="text-center hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 m-auto p-2 border-2 rounded-full border-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d={data.svg} />
              </svg>
              <p className="mt-2">{data.list}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Whyme;
