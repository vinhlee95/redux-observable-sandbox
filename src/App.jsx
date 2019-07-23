import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {beerSelectors} from './reducers';
import {getBeer} from './epics';

function App({loading, beers, dispatch}) {
	const renderGetBeers = () => {
		return (
			<>
				<p>No beers? Let's get it</p>
				<button onClick={() => dispatch(getBeer())}>Order 🍺</button>
			</>
		);
	};

	return (
		<div className="App">
			<h1>Let's go Epic with Observable 💪</h1>
			{beers ? (
				<p>There are currently ${beers.length} beers</p>
			) : (
				renderGetBeers()
			)}
		</div>
	);
}

const mapStateToProps = state => ({
	loading: beerSelectors.getLoading(state.beerReducer),
	beers: beerSelectors.getBeers(state.beerReducer)
});

export default connect(mapStateToProps)(App);
