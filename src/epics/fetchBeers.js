import {ajax} from 'rxjs/ajax';
import {concat, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';

const API = 'https://api.punkapi.com/v2/beers';

export const getBeerSuccess = beers => ({
	type: 'GET_BEER_SUCCESS',
	payload: beers
});

export const getBeer = () => {
	return {
		type: 'GET_BEER'
	};
};

export const setStatus = status => ({
	type: 'SET_STATUS',
	status
});

export const fetchBeersEpic = action$ => {
	return action$.pipe(
		ofType('GET_BEER'),
		switchMap(() => {
			return concat(
				// only GET beers after status is set as pending
				of(setStatus('pending')),
				ajax.getJSON(API).pipe(map(response => getBeerSuccess(response)))
			);
		})
	);
};
