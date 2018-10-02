import React from 'react';
import SwipeableViews from "react-swipeable-views";
import WeatherContainer from "../containers/WeatherContainer";
import SearchLocationContainer from "../containers/SearchLocationContainer";
import Saved from '../components/Saved';

const styles = {
    slide: {
        padding: 15,
        minHeight: '97vh',
        color: '#fff',
    },
    slide1: {
        backgroundColor: '#FEA900',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
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
                <Saved />
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
