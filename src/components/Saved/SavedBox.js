import React from 'react';
import styled from 'styled-components';

const StyledSavedBox = styled.div`
    width: 95%;
    margin: 10px auto;
    height: 50px;
    padding: 10px;
    border-radius: 8px;
    color: #fff;
    background-color: #5F6AF4;
`;

const Title = styled.span`
    display: block;
    font-size: 20px;
`;
const SubTitle = styled.span`
    display: block;
    font-size: 14px;
`;

const SavedBox = ({ city, region, country, deleteSavedItem, removeHandle, getWeather }) => {
    const clickHandler = (e) => {
        e.stopPropagation();
        removeHandle();
    };
    return (
        <StyledSavedBox onClick={getWeather}>
            <Title>{city}</Title>
            <SubTitle>{region}, {country}</SubTitle>
            <button onClick={clickHandler}>Supprimer</button>
        </StyledSavedBox>
    );
};

export default SavedBox;
