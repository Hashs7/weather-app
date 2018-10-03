import React from 'react';
import styled from 'styled-components';

const StyledSavedBox = styled.div`
    width: 95%;
    margin: 10px auto;
    height: 50px;
    background-color: #5F6AF4;
    border-radius: 8px;
    padding: 10px;
`;

const Title = styled.span`
    display: block;
    font-size: 20px;
`;
const SubTitle = styled.span`
    display: block;
    font-size: 14px;
`;

const SavedBox = ({ city, region, country, deleteSavedItem }) => {
    return (
        <StyledSavedBox>
            <Title>{city}</Title>
            <SubTitle>{region}, {country}</SubTitle>
            <button>Supprimer</button>
        </StyledSavedBox>
    );
};

export default SavedBox;
