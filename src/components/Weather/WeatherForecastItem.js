import React from 'react';
import styled from 'styled-components';
const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

const StyledItem = styled.div`
    display: inline-block;
    width: 25%;
    text-align: center;
`;

const StyledDay = styled.span`
    display: block;
`;

const StyledTemp = styled(StyledDay)`
    
`;

const WeatherForecastItem = ({ day, weather, temp }) => {
    const dayIndex = new Date(day).getDay();
    const dayName = days[dayIndex];

    return (
        <StyledItem>
            <StyledDay>{dayName}</StyledDay>
            <span>{weather}</span>
            <StyledTemp>{temp}°C</StyledTemp>
        </StyledItem>
    );
};

export default WeatherForecastItem;
