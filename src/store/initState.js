// import { entities } from "./store/reducers/entities";
import { VUE_HOME } from './actions/actions'

export const generateInitialState = () => {
    console.log(localStorage);


    console.log('localstorage')

    return {
        current: {
            vueIndex: VUE_HOME,
            city: '',
            country: '',
            conditionName: '',
            date: '',
            lat: '',
            long: '',
            isPosition: false
        }
    };
};

export default generateInitialState
