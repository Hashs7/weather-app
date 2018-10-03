import React from 'react';
import styled from 'styled-components';
import SavedBox from './SavedBox';

const StyledSavedContainer = styled.div`
    display: flex;
    
`;


const SavedVue = () => {
    return (
        <div>
            <p>Toutes tes villes favorites</p>
            <SavedBox
                city="Chambéry"
                region="Savoie"
                country="France"/>
            <SavedBox
                city="Annecy"
                region="Haute-Savoie"
                country="France"/>
            <SavedBox
                city="Montélimar"
                region="Drôme"
                country="France"/>
        </div>
    );
};

export default SavedVue;
