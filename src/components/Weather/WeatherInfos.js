import React from 'react';
import styled from 'styled-components';

const StyledWeatherInfos = styled.div`
    display: block;
`;

const Temperature = styled.span`
    display: block;
    font-size: 30px;
`;
const Humidity = styled(Temperature)`
    
`;


const WeatherInfos = (props) => {
    return (
        <StyledWeatherInfos>
            {props.temp ?
                <Temperature>{props.temp}°C</Temperature>
                : null
            }
            {props.humidity ?
                <Humidity>Humidité {props.humidity}%</Humidity>
                :  null
            }
        </StyledWeatherInfos>
    );
};

export default WeatherInfos;
