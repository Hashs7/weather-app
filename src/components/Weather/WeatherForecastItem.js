import React from 'react';
import styled from 'styled-components';
const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

const StyledItem = styled.div`
    display: inline-block;
    width: 20%;
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
    const tempFloor = Math.floor(temp);

    return (
        <StyledItem>
            <StyledDay>{dayName}</StyledDay>
            <span>{weather}</span>
            <StyledTemp>{tempFloor}°C</StyledTemp>
        </StyledItem>
    );
};

export default WeatherForecastItem;
