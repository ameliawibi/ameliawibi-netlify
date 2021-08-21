import { useEffect, useState } from "react";
import { ISO3166countries } from "../../containers/data";
import Button from "../../components/Button";
import { PRIMARY } from "../../components/Button/Button";
import "./Weather.css";

function Weather() {
  // State
  const [apiData, setApiData] = useState({});
  const [city, setCity] = useState("Singapore");
  const [cityInput, setCityInput] = useState("Singapore");

  // API KEY AND URL
  // const apiKey = process.env.REACT_APP_API_KEY;
  const generateApiUrl = (query) =>
    `https://api.openweathermap.org/data/2.5/find?q=${query}&units=metric&appid=f446ebd39041d8bc392415e3c6721b6f`;

  // Side effect
  useEffect(() => {
    fetch(generateApiUrl(city))
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [city]);

  const inputHandler = (event) => {
    setCityInput(event.target.value);
  };

  const submitHandler = () => {
    setCity(cityInput);
  };
  const hasWeatherInfoForToday = () => apiData.count > 0;
  const hasWeatherInfoForTomorrow = () => apiData.count > 1;

  return (
    <section id="weather" className="Container">
      <div className="Handler">
        <input
          id="search"
          type="text"
          placeholder="City name"
          onChange={inputHandler}
          value={cityInput}
        />
        <ul>
          <Button variant={PRIMARY} type="submit" onClick={submitHandler}>
            Search
          </Button>
        </ul>
      </div>

      {hasWeatherInfoForToday() > 0 ? (
        <section id="weatherinfo" className="Weatherinfo">
          <div className="Weatherinfotoday">
            <div>
              <div>
                <h2>{apiData.list[0].main.temp}&deg;C</h2>
                <h3>Feels like {apiData.list[0].main.feels_like}&deg;C</h3>
              </div>
              <div>
                <p>{apiData.list[0].weather[0].description}</p>
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
              />
            </div>
          </div>

          {hasWeatherInfoForTomorrow() && (
            <div className="Weatherinfotmr">
              <div>
                <h4>Tomorrow</h4>
                <aside className="left">
                  <img
                    src={`http://openweathermap.org/img/w/${apiData.list[1].weather[0].icon}.png`}
                    alt="weather status icon"
                  />
                  <p>
                    {apiData.list[1].main.temp}&deg; C <br />
                    {apiData.list[1].weather[0].description}
                  </p>
                </aside>
                <aside className="right">
                  <p>Min: {apiData.list[1].main.temp_min}&deg; C</p>
                  <p>Max: {apiData.list[1].main.temp_max}&deg; C</p>
                </aside>
              </div>
            </div>
          )}
        </section>
      ) : (
        <div>
          <span>Data is not available.</span>
        </div>
      )}
    </section>
  );
}

export default Weather;
