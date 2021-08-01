const weather = [
  {
    day: "MON",
  },
  {
    day: "TUE",
  },
  {
    day: "WED",
  },
  {
    day: "THUR",
  },
  {
    day: "FRI",
  },
  {
    day: "SAT",
  },
  {
    day: "SUN",
  },
];

function Weather() {
  return (
    <section
      id="weather"
      className="container flex-1 flex-col m-auto justify-between px-10 py-5 items-start"
    >
      <input
        id="search"
        type="text"
        className="w-full max-w-lg bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-800 text-base text-white outline-none py-1 px-3 leading-8 placeholder-gray-500"
        placeholder="Search"
      />
      <div
        className="mt-4 w-128 max-w-lg overflow-hidden bg-gray-800
      rounded-lg shadow-lg border border-gray-700"
      >
        <div className="flex items-center justify-between px-6 py-8">
          <div className="flex items-center">
            <div>
              <div className="text-4xl md:text-5xl text-white">28°C</div>
              <div>Feels like 30°C</div>
            </div>
            <div className="mx-5">
              <div className="font-semibold">Cloudy</div>
              <div>Singapore, Singapore</div>
            </div>
          </div>
          <div>ICON</div>
        </div>

        <div className="text-sm bg-gray-700 divide-y divide-gray-800 overflow-hidden">
          {weather.map((data) => (
            <div className="flex items-center px-6 py-4 ">
              <p className="w-1/6 text-lg text-gray-200">{data.day}</p>
              <p className="flex items-center w-2/3 px-4">
                <p>ICON</p>
                <p className="ml-3">Moody with a chance of showers</p>
              </p>
              <p className="w-1/6 text-right">
                <p>34°C</p>
                <p>28°C</p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Weather;
