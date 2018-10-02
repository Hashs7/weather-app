import React from 'react';
import styled from 'styled-components';
// const imgPath = '../assets/img/';

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



const Weather = (props) => {
    return (
        <StyledWeather>
            <IconContainer>
                <img src={props.imgSrc} alt=""/>
            </IconContainer>
            <WeatherTitle>{props.name}</WeatherTitle>
        </StyledWeather>
    );
};

export default Weather;
