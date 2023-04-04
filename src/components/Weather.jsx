import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utilis/api";
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";
import axios from "axios";
const Weather = () => {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState("kathmandu");
  const getWeatherData = async () => {
    const { data } = await axios.get(BASE_URL + `&q=${query}`);
    setApiData(data);
  };
  useEffect(() => {
    getWeatherData();
  }, [query]);
  const current = apiData?.current;
  return (
    <section className="weather main shadow-lg">
      <div className="wrapper">
        <div className="search_wrapper">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search BY City . . ."
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </form>
        </div>

        <div className="weather_icon mt-5">
          <div className="img">
            <img src={current?.condition?.icon} className="d-block" />
          </div>
          <p>
            Weather:
            <span className="ms-3"> {apiData?.current?.condition?.text}</span>
          </p>

          <p className=" d-block">
            Loction:
            <span className="ms-3">
              {apiData?.location?.country} ,{apiData?.location?.name}
            </span>
          </p>
        </div>
      </div>
      <div className="full-report mt-3">
        <div className="row justify-content-between">
          <div className="col-md-5">
            <p>
              Tempature:
              <span className="ms-3">
                {current?.temp_c} <RiCelsiusFill className="ms-1" />
              </span>
            </p>
            <p>
              Gust:
              <span className="ms-3 ">{current?.gust_kph} kph</span>
            </p>
            <p>
              Humidity:
              <span className="ms-3 ">{current?.humidity} </span>
            </p>
            <p>
              Wind Degree:
              <span className="ms-3 ">{current?.wind_degree} </span>
            </p>
          </div>

          <div className="col-md-5">
            <p>
              Uv:
              <span className="ms-3 ">{current?.uv} </span>
            </p>{" "}
            <p>
              Wind Speed:
              <span className="ms-3 ">{current?.wind_kph} kph </span>
            </p>{" "}
            <p>
              Wind Direction:
              <span className="ms-3 ">{current?.wind_dir} </span>
            </p>
            <p>
              Pressure:
              <span className="ms-3 ">{current?.pressure_in} in </span>
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
