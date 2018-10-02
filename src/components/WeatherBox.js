import React from 'react';
import WeatherAdress from "./WeatherAdress";
import WeatherInfos from "./WeatherInfos";
import Weather from "./Weather";

export const weatherBox = (props) => (
    <div>
        <WeatherAdress city={props.currentCity} country={props.currentCountry} />
        <Weather
            name={props.currentConditionName}
            imgSrc={props.currentImg} />
        <WeatherInfos
            temp={props.currentTemp}
            humidity={props.currentHumidity}/>
        <button onClick={props.getUserPosition}>Me localiser</button>
        <button onClick={props.getWeather}>Me donner la météo</button>
    </div>
);

export default weatherBox;
