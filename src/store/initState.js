// import { entities } from "./store/reducers/entities";


export const generateInitialState = () => {
    return {
        current: {
            city: 'Annecy',
            country: 'France',
            date: '',
            lat: '',
            long: '',
        }
    };
};

export default generateInitialState
