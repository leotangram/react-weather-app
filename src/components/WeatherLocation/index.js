import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import { SUN, WINDY } from "./../../contants/weathers";

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s"
};

const data2 = {
  temperature: 15,
  weatherState: WINDY,
  humidity: 20,
  wind: "10 m/s"
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Bogotá',
      data: data
    };
  }

  handleUpdateClick = () => {
    console.log("actualizado");
    this.setState({
      city: 'Bogotá!',
      data: data2
    })
  };

  render() {
    const {city, data} = this.state
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
