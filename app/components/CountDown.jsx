var React = require('react');
var Clock = require('Clock');

var CountDown = React.createClass({
	render: () => {
		return (
			<div>
				CountDown.jsx
				<Clock totalSeconds={129}/>
			</div>
		);
	}
});

module.exports = CountDown;