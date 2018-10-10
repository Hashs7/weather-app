import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { ICON_LIST } from '../constantes';

const IconContainer = styled.div`
    width: 100%;
    height: 67px;
    margin: 0 auto;
`;

const IconWeather = ({ imgCode }) => {
    const iconPath = `./assets/img/weather/${ICON_LIST[imgCode]}.svg`;
    return (
        <IconContainer>
            <SVG src={iconPath} style={{width: '100%', height: '100%'}}>
            </SVG>
        </IconContainer>
    );
};

export default IconWeather;
