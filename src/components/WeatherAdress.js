import React from 'react';
import styled from 'styled-components';

const StyledWeatherAdress = styled.div`
    width: 100%;
    height: 100px;
    text-align: center;
    color: #FFF;
`;

const StyledCity = styled.h2`
    font-size: 20px;
`;

const StyledCountry = styled.h3`
    font-size: 16px;
`;

const weatherAdress = (props) => {
    return (
        <StyledWeatherAdress>
            <StyledCity>{props.city}</StyledCity>
            <StyledCountry>{props.country}</StyledCountry>
        </StyledWeatherAdress>
    );
};

export default weatherAdress;
