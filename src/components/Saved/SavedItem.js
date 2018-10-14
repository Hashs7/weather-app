import React from 'react';
import styled from 'styled-components';
import IconSvg from "../../ui/IconSvg";

const StyledSavedItem = styled.div`
    display: flex;
    justify-content: space-between
    width: 100%;
    height: 52px;
    line-height: 52px;
    margin: 10px auto;
    box-sizing: border-box;
    padding: 0 0 0 15px;
    border-radius: 8px;
    color: #fff;
    background-color: #5F6AF4;
`;

const Title = styled.span`
    display: block;
    font-size: 20px;
`;


const SavedItem = ({ city, deleteSavedItem, removeHandle, getWeather }) => {
    const clickHandler = (e) => {
        e.stopPropagation();
        removeHandle();
    };
    return (
        <StyledSavedItem onClick={getWeather}>
            <Title>{city}</Title>
            <IconSvg
                style={{display: 'inline-block', verticalAlign: 'middle'}}
                width={28}
                name="heart"
                color={"#fff"}
                click={clickHandler}/>
        </StyledSavedItem>
    );
};

export default SavedItem;
