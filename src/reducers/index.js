import {combineReducers} from 'redux';
import {beerReducer} from './beer';

const initialState = {
	name: 'Lee'
};
const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_NAME':
			return {
				...state,
				name: action.payload
			};

		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	appReducer,
	beerReducer
});
