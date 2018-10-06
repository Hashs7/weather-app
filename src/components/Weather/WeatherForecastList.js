import React from 'react';
import styled from 'styled-components';
import WeatherForecastItem from './WeatherForecastItem'

const StyledForecast = styled.div`
    width: 100%;
    margin-top: 50px;
`;

const WeatherForecastList = ({ prevision }) => {
    let allItems = null;
    if(prevision){
        allItems = Object.keys(prevision).map(key => {
            const item = prevision[key];
            if(key === '0'){
                return;
            }
            return(
                <WeatherForecastItem key={key} day={item.date} weather={item.day.condition.code} temp={item.day.avgtemp_c}/>
            )
        })
    }


    return (
        <StyledForecast>
            {allItems ? allItems : null}
        </StyledForecast>
    );
};

export default WeatherForecastList;
