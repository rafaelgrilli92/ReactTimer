var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');

var CountDown = React.createClass({
	componentDidUpdate: function(prevProps, prevState) {
		var actualCountdownStatus = this.state.countdownStatus;
		if (actualCountdownStatus !== prevState.countdownStatus) {
			switch(actualCountdownStatus) {
				case 'started':
					this.startTimer();
					break;
			}
		}
	},
	getInitialState: function() {
		return {
			count: 0,
			countdownStatus: 'stopped'
		}
	},
	handleSetCountdown: function(seconds) {
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		})
	},
	render: function() {
		var {count} = this.state;
		return (
			<div>
				<Clock totalSeconds={count}/>
				<CountDownForm onSetCountdown={this.handleSetCountdown} />
			</div>
		);
	},
	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});
		}, 1000)
	}
});

module.exports = CountDown;