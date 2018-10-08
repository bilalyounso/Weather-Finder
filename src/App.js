import React, { Component } from 'react';
import WeatherCard from './WeatherCard';
//import WeatherForecast from './WeatherForecast';

import './App.css';

const API_KEY = '7a5a13db9c07e082f14fa55761fd56cf';


class App extends Component{
  constructor(){
    super();

    this.state={
      temp: undefined,
      icon: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      //temp_max: undefined,
      //temp_min: undefined,
      id: undefined,
      hasError: undefined,

    }
  }

    findWeather = async (event) =>{
      event.preventDefault();
      const city = event.target.elements.city.value;

      //const country = event.target.elements.country.value;

      const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);
      const weatherData = await response.json();
      console.log(response);


      if (response.status === 404){
        this.setState({
          hasError: "Please enter a valid city",
        });
      } else if (response.status === 400) {
        this.setState({
          hasError: "Please enter a valid city",
        });
      } else {
        this.setState({
          temp: weatherData.main.temp,
          icon: weatherData.weather[0].icon,
          city: weatherData.name,
          country: weatherData.sys.country,
          humidity: weatherData.main.humidity,
          description: weatherData.weather[0].description,
          //temp_max: weatherData.main.temp_max,
          //temp_min: weatherData.main.temp_min,
          id: weatherData.weather[0].id,
      });
      }
    }

  render(){
    return(
      <div>
        <div className="mainWeatherCard">
          <WeatherCard findWeather={this.findWeather}
                       temp={this.state.temp}
                       icon={this.state.icon}
                       name={this.state.city}
                       country={this.state.country}
                       humidity={this.state.humidity}
                       description={this.state.description}
                       //temp_max={this.state.temp_max}
                       //temp_min={this.state.temp_min}
                       id={this.state.id}
                       hasError={this.state.hasError}
           />
        </div>

        <div>

        </div>
      </div>);
    }

}

export default App;
