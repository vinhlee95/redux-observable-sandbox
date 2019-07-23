const initialState = {
	data: null,
	loading: true
};

export const beerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_BEER_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload
			};

		case 'SET_STATUS':
			return {
				...state,
				loading: action.status
			};

		default:
			return state;
	}
};
