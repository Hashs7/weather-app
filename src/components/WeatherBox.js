import React from 'react';
import WeatherAdress from "./WeatherAdress";
import Weather from "./Weather";

export const weatherBox = ({ currentCity, currentCountry, getUserPosition }) => (
    <div>
        <WeatherAdress city={currentCity} country={currentCountry} />
        <Weather />
        <button onClick={getUserPosition}>Me localiser</button>
    </div>
);

export default weatherBox;
