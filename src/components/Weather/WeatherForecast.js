import React from 'react';
import styled from 'styled-components';
import WeatherForecastItem from './WeatherForecastItem'


const WeatherForecast = ({ prevision }) => {
    console.log('prevision', prevision);
    let allItems = null;
    if(prevision){
        allItems = Object.keys(prevision).map(key => {
            const item = prevision[key];
            console.log(prevision[key]);
            if(key === '0'){
                return;
            }
            return(
                <WeatherForecastItem key={key} day={item.date} weather={item.day.condition.code} temp={item.day.avgtemp_c}/>
            )
        })
    }


    return (
        <div styled={{width: '100%'}}>
            {allItems ? allItems : null}
        </div>
    );
};

export default WeatherForecast;
