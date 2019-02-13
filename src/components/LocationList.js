import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from "prop-types";

const LocationList = ({ cities }) => {
  console.log(cities);
  return (
    <div>
      <WeatherLocation city="Bogota,co" />
      <WeatherLocation city="Buenos Aires,ar" />
      <WeatherLocation city="Mexico,mex" />
      <WeatherLocation city="Washington,us" />
      <WeatherLocation city="Barcelona,es" />
    </div>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired
};

export default LocationList;
