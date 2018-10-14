import React from 'react';
import SavedItem from './SavedItem';
import { VUE_HOME } from '../../store/actions/actions';
import IconSvg from '../../ui/IconSvg';
import { StyledVueChanger, StyledHead, StyledTitle} from '../../ui/Styled';

const SavedVue = ({ allSavedCity, deleteSavedItem, getWeather, goToVue }) => {
    let displaySavedBox = null;

    if(allSavedCity){
        displaySavedBox = allSavedCity.map((item, i) => (
            <SavedItem
                key={i}
                city={item}
                getWeather={() => getWeather(item)}
                removeHandle={() => deleteSavedItem(item)}/>
        ));
    }

    return (
        <div>
            <StyledHead>
                <StyledTitle>Villes favoris</StyledTitle>
                <StyledVueChanger style={{ justifyContent: 'flex-end'}}>
                    <IconSvg
                        width={20}
                        name="chevron-right"
                        click={() => goToVue(VUE_HOME)}/>
                </StyledVueChanger>
            </StyledHead>
            {displaySavedBox ? displaySavedBox : null}
        </div>
    );
};

export default SavedVue;
