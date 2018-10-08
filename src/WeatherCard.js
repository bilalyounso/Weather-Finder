import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import sun from './weather-iconic-master/sources/SVG/sun.svg';
import moon from './weather-iconic-master/sources/SVG/moon.svg';
import sunCloud from './weather-iconic-master/sources/SVG/sunCloud.svg';
import moonCloud from './weather-iconic-master/sources/SVG/moonCloud.svg';
import cloud from './weather-iconic-master/sources/SVG/cloud.svg';
import clouds from './weather-iconic-master/sources/SVG/clouds.svg';
import cloudRain from './weather-iconic-master/sources/SVG/cloudRain.svg';
import sunCloudRain from './weather-iconic-master/sources/SVG/sunCloudRain.svg';
import moonCloudRain from './weather-iconic-master/sources/SVG/moonCloudRain.svg';
import lightning from './weather-iconic-master/sources/SVG/lightning.svg';
import cloudSnow from './weather-iconic-master/sources/SVG/cloudSnow.svg';
import fog from './weather-iconic-master/sources/SVG/fog.svg';


class WeatherCard extends Component {
  render() {
    // display the icon that matches icon number in API data
    var displayIcon;
    if (this.props.icon === "01d"){
      displayIcon = <img src={sun}  alt="icon" height="200px"/>;
    } else if (this.props.icon === "01n") {
      displayIcon = <img src={moon}  alt="icon" height="200px"/>;
    } else if (this.props.icon === "02d") {
      displayIcon = <img src={sunCloud}  alt="icon" height="200px"/>;
    } else if (this.props.icon === "02n") {
      displayIcon = <img src={moonCloud}  alt="icon" height="200px"/>;
    } else if (this.props.icon === "03d" || this.props.icon === "03n") {
      displayIcon = <img src={cloud}  alt="icon" height="200px"/>;
    } else if (this.props.icon === "04d" || this.props.icon === "04n") {
      displayIcon = <img src={clouds}  alt="icon" height="200px"/>;
    } else if (this.props.icon === "09d" || this.props.icon === "09n") {
      displayIcon = <img src={cloudRain}  alt="icon" height="200px"/>;
    } else if (this.props.icon === "10d") {
      displayIcon = <img src={sunCloudRain}  alt="icon" height="200px"/>;
    } else if (this.props.icon === "10n") {
      displayIcon = <img src={moonCloudRain}  alt="icon" height="200px"/>;
    } else if (this.props.icon === "11d" || this.props.icon === "11n") {
      displayIcon = <img src={lightning}  alt="icon" height="200px"/>;
    } else if (this.props.icon === "13d" || this.props.icon === "13n") {
      displayIcon = <img src={cloudSnow}  alt="icon" height="200px"/>;
    } else if (this.props.icon === "50d" || this.props.icon === "50n") {
      displayIcon = <img src={fog}  alt="icon" height="200px"/>;
    }

    var dataDisplay =
                <div>
                  <p id="location">{this.props.name} {this.props.country}</p>
                  {this.props.temp && <h1>{this.props.temp}° </h1>}
                  {displayIcon}
                  {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
                  {this.props.description && <p>Condition: {this.props.description}</p>}
                </div>

    var displayData;
    const refresh = () =>{
      window.location.reload();
    }
    if (this.props.hasError){
      displayData =
      <div>
        <p>Please enter a valid city</p>
        <button className="grow br-pill" onClick={refresh} id="refreshButton">Try Again</button>
      </div>;
    } else {
      displayData = dataDisplay;
    }

    return (
      <div>
        <header className="tc" id="title">Weather Finder App</header>
        <div className="tc fl w-50 br4 dip pa3 ma2 bw2" id="mainCard">

          <div id="form">
            <form onSubmit={this.props.findWeather}>
              <input id="searchCity"
                     className="cityCountry"
                     type="text"
                     name="city"
                     placeholder="Enter a city.."
                     value={this.props.searchUpdate}
                   />
              <button id="submitButton" className="grow" >Find Weather</button>
            </form>
          </div>
          <div  >
              {displayData}
          </div>
        </div>
      </div>

    );
  }
}

export default WeatherCard;
