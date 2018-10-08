import React, {Component} from 'react';
import './WeatherForecast.css';
import './App.css';
import App from './App';



class WeatherForecast extends Component{

  
  render(){
    return(
      <div className="tc fl w-50 br4 dip pa3 ma2 bw2 shadow-5 bg-dark-blue">
        <div className="forecastDiv">
          <p>day</p>
          <div>
            <img/>
          </div>
          <div>
            <p>Max</p>
            <p>Min</p>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherForecast;
