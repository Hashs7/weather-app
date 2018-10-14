import React from 'react';
import styled from 'styled-components';
import IconSvg from "../../ui/IconSvg";

const StyledSavedBox = styled.div`
    display: flex;
    justify-content: space-between
    width: 100%;
    margin: 10px auto;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 8px;
    color: #fff;
    background-color: #5F6AF4;
`;

const Title = styled.span`
    display: block;
    font-size: 20px;
`;


const SavedBox = ({ city, deleteSavedItem, removeHandle, getWeather }) => {
    const clickHandler = (e) => {
        e.stopPropagation();
        removeHandle();
    };
    return (
        <StyledSavedBox onClick={getWeather}>
            <Title>{city}</Title>
            <IconSvg name="heart" color={"#fff"} click={clickHandler}/>
        </StyledSavedBox>
    );
};

export default SavedBox;
