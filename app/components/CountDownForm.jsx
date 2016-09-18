var React = require('react');

var CountDownForm = React.createClass({
	render: function() {
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
					<input type="text" ref="seconds" placeholder="Enter time in seconds..."/>
					<button className="button expanded">Start</button>
				</form>
			</div>
		)
	},
	onSubmit: function (e) {
		e.preventDefault();
		
		var seconds = this.refs.seconds.value;

		if (seconds.length > 0 && seconds.match(/^[0-9]*$/)) {
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(seconds, 10));
		}
	}
});

module.exports = CountDownForm;