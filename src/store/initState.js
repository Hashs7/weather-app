// import { entities } from "./store/reducers/entities";
import { VUE_HOME } from './actions/actions'

export const generateInitialState = () => {
    return {
        current: {
            vueIndex: VUE_HOME,
            city: '',
            country: '',
            conditionName: '',
            date: '',
            lat: '',
            long: '',
        }
    };
};

export default generateInitialState
