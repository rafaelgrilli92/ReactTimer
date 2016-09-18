var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var CountDown = require('CountDown');

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App CSS
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Timer} />
			<Route path="countdown" component={CountDown} />
		</Route>
	</Router>, 
	document.getElementById('app')
);