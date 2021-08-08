import { useEffect, useState } from "react";
import { ISO3166countries } from "../../containers/data";

function Weather() {
  // State
  const [apiData, setApiData] = useState({});
  const [city, setCity] = useState("Singapore");
  const [cityInput, setCityInput] = useState("Singapore");

  // API KEY AND URL
  // const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${state}&units=metric&appid=f446ebd39041d8bc392415e3c6721b6f`;

  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const inputHandler = (event) => {
    setCityInput(event.target.value);
  };

  const submitHandler = () => {
    setCity(cityInput);
  };

  return (
    <section
      id="weather"
      className="container flex-1 flex-col m-auto justify-between px-10 py-5 items-start h-screen"
    >
      <input
        id="search"
        type="text"
        className="w-full max-w-lg bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:border-indigo-500 focus:ring-indigo-800 text-base text-white outline-none py-1 px-3 leading-8 placeholder-gray-500 mb-4"
        placeholder="City name"
        onChange={inputHandler}
        value={cityInput}
      />
      <ul className="flex justify-left">
        <li>
          <input
            className="inline-flex text-white bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-500 rounded text-base md:px-6"
            type="submit"
            value="Search"
            onClick={submitHandler}
          />
        </li>
      </ul>

      {apiData.count > 0 ? (
        <div
          className="mt-4 w-128 max-w-lg overflow-hidden bg-gray-800
      rounded-lg shadow-lg border border-gray-700"
        >
          <div className="flex items-center justify-between px-6 py-8">
            <div className="flex items-center">
              <div>
                <p className="text-4xl md:text-5xl text-white">
                  {apiData.list[0].main.temp}&deg; C
                </p>
                <p>Feels like {apiData.list[0].main.feels_like}&deg; C</p>
              </div>
              <div className="mx-5">
                <p className="font-semibold">
                  {apiData.list[0].weather[0].description}
                </p>
                <p>
                  {apiData.list[0].name},
                  {
                    ISO3166countries.find(
                      (element) =>
                        element.alpha2 === apiData.list[0].sys.country
                    ).name
                  }
                </p>
              </div>
            </div>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${apiData.list[0].weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />
            </div>
          </div>

          <div className="text-sm bg-gray-700 divide-y divide-gray-800 overflow-hidden">
            <div className="flex items-center px-6 py-4 ">
              <p className="w-1/6 text-lg text-gray-200">Tomorrow</p>
              <div className="flex items-center w-2/3 px-4">
                <img
                  src={`http://openweathermap.org/img/w/${apiData.list[1].weather[0].icon}.png`}
                  alt="weather status icon"
                  className="weather-icon"
                />
                <p className="ml-3">
                  {apiData.list[1].main.temp}&deg; C <br />
                  {apiData.list[1].weather[0].description}
                </p>
              </div>
              <div className="w-1/2 text-right">
                <p>Min: {apiData.list[1].main.temp_min}&deg; C</p>
                <p>Max: {apiData.list[1].main.temp_max}&deg; C</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="mt-2">Data is not available.</h1>
        </div>
      )}
    </section>
  );
}

export default Weather;
