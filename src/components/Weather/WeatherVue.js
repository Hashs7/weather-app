import React from 'react';
import styled from 'styled-components';
import WeatherAdress from "./WeatherAdress";
import WeatherInfos from "./WeatherInfos";
import WeatherBox from "./WeatherBox";
import { VUE_SEARCH, VUE_SAVED } from "../../store/actions/actions";
import IconSvg from "../../ui/IconSvg";


const StyledWeatherVue = styled.div`
    position: relative;
    display: inline-flex;
    width: 100%;
    height: 100%;
`;

const StyledWeatherContainer = styled.div`
    display: block;
    margin: auto;
    width: 100%
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
            <IconSvg name="saved" click={() => props.goToVue(VUE_SAVED)}/>
            <IconSvg name="search" click={() => props.goToVue(VUE_SEARCH)}/>
        </StyledVueChanger>
        <StyledWeatherContainer>
            <WeatherAdress city={props.currentCity} country={props.currentCountry} />
            <WeatherBox
                name={props.currentConditionName}
                imgSrc={props.currentImg}/>
            <WeatherInfos
                wind={props.currentWind}
                humidity={props.currentHumidity}
                temp={props.currentTemp}/>
        </StyledWeatherContainer>
        <StyledWeatherAction>
            <IconSvg name="map" click={props.getUserPosition}/>
            <IconSvg name="heart" click={props.addSavedPosition}/>
        </StyledWeatherAction>
    </StyledWeatherVue>
);

export default weatherVue;
