import React, {useEffect} from 'react';
import {connect} from 'react-redux';

function App({app, beers}) {
	console.log(beers);
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
		</div>
	);
}

const mapStateToProps = state => ({
	app: state.appReducer,
	beers: state.beerReducer
});

export default connect(mapStateToProps)(App);
