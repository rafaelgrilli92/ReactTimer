var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
	render: () => {
		return (
			<div>
				Timer.jsx
				<Clock totalSeconds={62}/>
			</div>
		);
	}
});

module.exports = Timer;