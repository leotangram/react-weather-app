import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForeCastItem from './ForecastItem'
import './styles.css'
import transformForecast from './../services/transformForecast'

// const days = [
//   'Lunes',
//   'Martes',
//   'Miercoles',
//   'Jueves',
//   'Viernes',
//   'Sábado',
//   'Domingo'
// ]
// const data = {
//   temperature: 10,
//   humidity: 10,
//   weatherState: 'normal',
//   wind: 'normal'
// }

export const api_key = '76ff146f7db30c279ba914a50a7ab1b8'
export const url = 'http://api.openweathermap.org/data/2.5/forecast'
class ForecastExtended extends Component {
  constructor() {
    super()
    this.state = { forecastData: null }
  }

  componentDidMount() {
    this.updateCity(this.props.city)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.city !== this.props.city) {
      this.setState({ forecastData: null })
      this.updateCity(this.props.city)
    }
  }

  updateCity = city => {
    const url_forecast = `${url}?q=${city}&appid=${api_key}`

    fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        console.log(weather_data)
        const forecastData = transformForecast(weather_data)
        console.log(forecastData)
        this.setState({ forecastData })
      })
  }

  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForeCastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      />
    ))
  }
  renderProgress() {
    return <h3>Cargando Pronóstico extendido...</h3>
  }
  render() {
    const { city } = this.props
    const { forecastData } = this.state
    return (
      <div>
        <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
        {forecastData
          ? this.renderForecastItemDays(forecastData)
          : this.renderProgress()}
      </div>
    )
  }
}

ForecastExtended.proptypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended
