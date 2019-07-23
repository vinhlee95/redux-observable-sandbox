import {ajax} from 'rxjs/ajax';
import {map, concat} from 'rxjs/operators';
import {ofType} from 'redux-observable';

const API = 'https://api.punkapi.com/v2/beers';

export const getBeerSuccess = beers => ({
	type: 'GET_BEER_SUCCESS',
	payload: beers
});

const getBeer = () => ({
	type: 'GET_BEER'
});

const setStatus = status => ({
	type: 'SET_STATUS',
	status
});

export const fetchBeersEpic = action$ => {
	return action$.pipe(
		ofType('GET_BEER'),
		switchMap(() => {
			return concat(
				//
				of(setStatus('pending')),
				ajax.getJSON(API).pipe(map(response => getBeerSuccess(response)))
			);
		})
	);
};
