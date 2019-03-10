import React from 'react'
import PropTypes from 'prop-types'
import ForeCastItem from './ForecastItem'
import './styles.css'

const renderForecastItemDays = forecastData => {
  return forecastData.map(forecast => (
    <ForeCastItem
      key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={forecast.weekDay}
      hour={forecast.hour}
      data={forecast.data}
    />
  ))
}
const renderProgress = () => {
  return <h3>Cargando Pronóstico extendido...</h3>
}

const ForecastExtended = ({ city, forecastData }) => (
  <div>
    <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
    {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
  </div>
)

ForecastExtended.proptypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
}

export default ForecastExtended
