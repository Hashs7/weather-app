import React from 'react';
import styled from 'styled-components';
import WeatherAdress from "./WeatherAdress";
import WeatherInfos from "./WeatherInfos";
import WeatherBox from "./WeatherBox";
import { VUE_SEARCH, VUE_SAVED } from "../../store/actions/actions";
import WeatherForecast from './WeatherForecastList';
import IconSvg from '../../ui/IconSvg';
import { StyledVueChanger } from '../../ui/Styled';

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
    max-width: 700px;
`;

const StyledWeatherAction = styled(StyledVueChanger)`
    top: auto;
    bottom: 15px;
`;

export const weatherVue = (props) => {
    let isSaved = false;
    if(props.savedCities && props.savedCities.filter(city => city === props.currentCity).length){
        isSaved = true;
    }

    return (
        <StyledWeatherVue>

            <StyledVueChanger>
                <IconSvg width={28} name="saved" click={() => props.goToVue(VUE_SAVED)}/>
                <IconSvg width={28} name="search" click={() => props.goToVue(VUE_SEARCH)}/>
            </StyledVueChanger>

            <StyledWeatherContainer>
                <WeatherAdress city={props.currentCity} country={props.currentCountry} />

                <WeatherBox
                    name={props.currentConditionName}
                    imgCode={props.currentImgCode}/>

                <WeatherInfos
                    wind={props.currentWind}
                    humidity={props.currentHumidity}
                    temp={props.currentTemp}/>

                <WeatherForecast prevision={props.currentForecast}/>
            </StyledWeatherContainer>

            <StyledWeatherAction>
                <IconSvg width={28} name="map" isActive={true} click={props.getUserPosition}/>
                <IconSvg width={28} name="heart" isActive={isSaved} click={props.toggleSavedPosition}/>
            </StyledWeatherAction>

        </StyledWeatherVue>
)};

export default weatherVue;
