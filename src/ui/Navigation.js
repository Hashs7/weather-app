import React from 'react';
import SwipeableViews from "react-swipeable-views";
import SavedContainer from "../containers/SavedContainer";
import WeatherContainer from "../containers/WeatherContainer";
import SearchLocationContainer from "../containers/SearchLocationContainer";

const styles = {
    slide: {
        padding: 15,
        height: '100vh',
        boxSizing: 'border-box',
        color: '#3C3440',
    },
    slide1: {
        backgroundColor: '#FEFDFE',
    },
    slide2: {
        backgroundColor: '#FEFDFE',
    },
    slide3: {
        backgroundColor: '#FEFDFE',
    },
};

const Navigation = (props) => {
    const checkIndex = index => {
        if(index === 2){
            // TODO Select input on change vue
        }
        props.changeIndexHandle(index);
    };

    return (
        <SwipeableViews enableMouseEvents index={props.vueIndex} onChangeIndex={(i) => checkIndex(i)}>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
                <SavedContainer />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
                <WeatherContainer />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
                <SearchLocationContainer />
            </div>
        </SwipeableViews>
    );
};

export default Navigation;
