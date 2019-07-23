import {combineEpics} from 'redux-observable';

import {fetchBeersEpic} from './fetchBeers';

const rootEpic = combineEpics(fetchBeersEpic);

export {rootEpic};

export * from './fetchBeers';
