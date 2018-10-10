import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { ICON_LIST } from '../../constantes';

const StyledWeather = styled.div`
    text-align: center;
`;

const WeatherTitle = styled.span`
    position: relative;
    top: -12px;
    font-size: 30px;
`;

const IconContainer = styled.div`
    width: 140px;
    margin: 0 auto;
`;

const WeatherBox = ({imgCode, name}) => {
    const iconPath = `./assets/img/weather/${ICON_LIST[imgCode]}.svg`;
    return (
        <StyledWeather>
            <IconContainer>
                <SVG src={iconPath} style={{width: '100%', height: '100%'}}>
                </SVG>
            </IconContainer>
            <WeatherTitle>{name}</WeatherTitle>
        </StyledWeather>
    );
};

export default WeatherBox;
