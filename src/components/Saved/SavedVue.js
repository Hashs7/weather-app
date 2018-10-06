import React from 'react';
import styled from 'styled-components';
import SavedBox from './SavedBox';

const StyledSavedContainer = styled.div`
    display: flex;
    
`;


const SavedVue = ({ allSavedCity, deleteSavedItem }) => {
    let displaySavedBox = null;
    console.log('reload');
    if(allSavedCity){
        displaySavedBox = allSavedCity.map((item, i) => (
            console.log('regenerate'),
            <SavedBox
                key={i}
                city={item}
                click={() => deleteSavedItem(item)}
                region=""
                country=""/>
        ));
    }

    return (
        <div>
            <p>Toutes tes villes favorites</p>
            {displaySavedBox ? displaySavedBox : null}
        </div>
    );
};

export default SavedVue;
