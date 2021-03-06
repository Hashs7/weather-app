import React from 'react';
import styled from 'styled-components';

const StyledWeatherInfos = styled.div`
    display: flex;
    justify-content: space-around;
    width: 95%;
    margin: 20px auto 0 auto;
    
`;

const StyledInfoContainer = styled.div`
    display: inline-block;
    text-align: center;
    width: 33%;
`;

const StyledInfo = styled.span`
    display: block;
    width: 100%;
    font-size: 1.5rem;
`;

const StyledInfoDesc = styled.span`
    display: block;
    width: 100%;
    color: #afadaf;
    font-size: .9rem;
`;



const WeatherInfos = (props) => {
    return (
        <StyledWeatherInfos>
            {props.temp ?
                <StyledInfoContainer>
                    <StyledInfo>{props.temp}°C</StyledInfo>
                    <StyledInfoDesc>Température</StyledInfoDesc>
                </StyledInfoContainer>
                :  null
            }
            {props.humidity ?
                <StyledInfoContainer>
                    <StyledInfo>{props.humidity}%</StyledInfo>
                    <StyledInfoDesc>Humidité</StyledInfoDesc>
                </StyledInfoContainer>
                :  null
            }
            {props.wind ?
                <StyledInfoContainer>
                    <StyledInfo>{props.wind} km/h</StyledInfo>
                    <StyledInfoDesc>Vent</StyledInfoDesc>
                </StyledInfoContainer>
                : null
            }

        </StyledWeatherInfos>
    );
};

export default WeatherInfos;
