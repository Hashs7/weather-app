import React from 'react';
import styled from 'styled-components';
import WeatherAdress from "./WeatherAdress";
import WeatherInfos from "./WeatherInfos";
import Weather from "./Weather";
import { VUE_SEARCH, VUE_SAVED } from "../store/actions/actions";

const StyledVueChanger = styled.div`
        display: block; 
`;


export const weatherBox = (props) => (
    <div>
        <StyledVueChanger>
            <button onClick={() => props.goToVue(VUE_SAVED)}>favoris</button>
            <button onClick={() => props.goToVue(VUE_SEARCH)}>rechercher</button>
        </StyledVueChanger>
        <WeatherAdress city={props.currentCity} country={props.currentCountry} />
        <Weather
            name={props.currentConditionName}
            imgSrc={props.currentImg} />
        <WeatherInfos
            temp={props.currentTemp}
            humidity={props.currentHumidity}/>
        <button onClick={props.getUserPosition}>Me localiser</button>
    </div>
);

export default weatherBox;
