import React from 'react';
import styled from 'styled-components';
import IconWeather from '../../ui/IconWeather'
const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

const StyledItem = styled.div`
    display: inline-block;
    width: 20%;
    text-align: center;
`;

const StyledDay = styled.span`
    display: block;
    position: relative;
    top: 5px;
`;

const StyledTemp = styled(StyledDay)`
    margin-top: -8px;
`;

const WeatherForecastItem = ({ day, weather, temp }) => {
    const dayIndex = new Date(day).getDay();
    const dayName = days[dayIndex];
    const tempFloor = Math.floor(temp);

    return (
        <StyledItem>
            <StyledDay>{dayName}</StyledDay>
            <IconWeather imgCode={weather}/>
            <StyledTemp>{tempFloor}°C</StyledTemp>
        </StyledItem>
    );
};

export default WeatherForecastItem;
