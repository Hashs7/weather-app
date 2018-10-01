import React from 'react';
import styled from 'styled-components';
import cloud from '../assets/img/cloudy.svg';

const StyledWeather = styled.div`
    text-align: center;
    color: #FFF;
`;

const WeatherTitle = styled.span`
    font-size: 30px;
`;

const IconContainer = styled.div`
    width: 100px;
    margin: 10px auto;
`;


const Weather = () => {
    return (
        <StyledWeather>
            <WeatherTitle>Nuageux</WeatherTitle>
            <IconContainer>
                <img src={cloud} alt=""/>
            </IconContainer>
        </StyledWeather>
    );
};

export default Weather;
