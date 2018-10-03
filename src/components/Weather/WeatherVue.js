import React from 'react';
import styled from 'styled-components';
import WeatherAdress from "./WeatherAdress";
import WeatherInfos from "./WeatherInfos";
import WeatherBox from "./WeatherBox";
import { VUE_SEARCH, VUE_SAVED } from "../../store/actions/actions";


const StyledWeatherVue = styled.div`
    position: relative;
    display: inline-flex;
    width: 100%;
    height: 100%;
`;

const StyledWeatherContainer = styled.div`
    margin: auto;
    display: block;
`;

const StyledVueChanger = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: 0;
`;
const StyledWeatherAction = styled(StyledVueChanger)`
    top: auto;
    bottom: 0;
`;



export const weatherVue = (props) => (
    <StyledWeatherVue>
        <StyledVueChanger>
            <button onClick={() => props.goToVue(VUE_SAVED)}>favoris</button>
            <button onClick={() => props.goToVue(VUE_SEARCH)}>rechercher</button>
        </StyledVueChanger>
        <StyledWeatherContainer>
            <WeatherAdress city={props.currentCity} country={props.currentCountry} />
            <WeatherBox
                name={props.currentConditionName}
                imgSrc={props.currentImg} />
            <WeatherInfos
                temp={props.currentTemp}
                humidity={props.currentHumidity}/>
        </StyledWeatherContainer>
        <StyledWeatherAction>
            <button onClick={props.getUserPosition}>Me localiser</button>
            <button onClick={props.addSavedPosition}>Sauvegarder</button>
        </StyledWeatherAction>
    </StyledWeatherVue>
);

export default weatherVue;
