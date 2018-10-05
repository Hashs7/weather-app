import React from 'react';
import styled from 'styled-components';

const StyledWeatherAdress = styled.div`
    width: 100%;
    text-align: center;
`;

const StyledCity = styled.span`
    display: block;
    font-size: 2rem;
`;

const StyledCountry = styled.span`
    font-size: 1rem;
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
