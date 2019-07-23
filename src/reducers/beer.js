const initialState = {
	data: null,
	loading: 'idle'
};

export const beerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_BEER_SUCCESS':
			return {
				...state,
				loading: 'success',
				data: action.payload
			};

		case 'SET_STATUS':
			console.log('Setting status', action.status);
			return {
				...state,
				loading: action.status
			};

		default:
			return state;
	}
};

export const beerSelectors = {
	getBeers: (state = initialState) => state.data,
	getLoading: (state = initialState) => state.loading
};
