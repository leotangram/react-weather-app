import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import { SUN } from "./../../contants/weathers";

const location = "Bogota,co";
const api_key = "76ff146f7db30c279ba914a50a7ab1b8";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather/";
//api.openweathermap.org/data/2.5/weather/?q=[LOCATION]&appid=[ID]

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s"
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Bogotá",
      data: data
    };
  }

  getWeatherState = weather_data => {
    return SUN;
  };

  getData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(weather_data);

    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind: `${speed} m/s`
    };

    return data;
  };

  handleUpdateClick = () => {
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        const newWeather = this.getData(data);
        console.log(newWeather);
        debugger
        this.setState({
          data: newWeather
        });
      });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
