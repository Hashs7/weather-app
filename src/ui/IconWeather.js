import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { ICON_LIST } from '../constantes';

const IconContainer = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const IconWeather = ({ imgCode }) => {
    const iconPath = `./assets/img/weather/${ICON_LIST[imgCode]}.svg`;
    console.log(ICON_LIST[imgCode]);
    return (
        <IconContainer>
            <SVG src={iconPath} style={{ height: '67px', display: 'block'}}>
            </SVG>
        </IconContainer>
    );
};

export default IconWeather;
