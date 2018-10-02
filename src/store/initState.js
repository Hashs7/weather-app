// import { entities } from "./store/reducers/entities";

export const generateInitialState = () => {
    return {
        current: {
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
