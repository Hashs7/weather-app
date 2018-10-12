import React from 'react';
import SavedBox from './SavedBox';

const SavedVue = ({ allSavedCity, deleteSavedItem, getWeather }) => {
    let displaySavedBox = null;

    if(allSavedCity){
        displaySavedBox = allSavedCity.map((item, i) => (
            <SavedBox
                key={i}
                city={item}
                getWeather={() => getWeather(item)}
                removeHandle={() => deleteSavedItem(item)}
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
