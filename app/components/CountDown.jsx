var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');
var Controls = require('Controls');

var CountDown = React.createClass({
	componentDidUpdate: function(prevProps, prevState) {
		var actualCountdownStatus = this.state.countdownStatus;
		if (actualCountdownStatus !== prevState.countdownStatus) {
			switch(actualCountdownStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0})
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},
	componentWillUnmount: function() {
		clearInterval(this.timer);
		this.timer = undefined;
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
	handleStatusChange: function(newStatus) {
		this.setState({
			countdownStatus: newStatus
		})
	},
	render: function() {
		var {count, countdownStatus} = this.state;
		var renderControlArea = () => {
			if (countdownStatus !== "stopped") {
				return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
			} else {
				return <CountDownForm onSetCountdown={this.handleSetCountdown} />
			}
		};

		return (
			<div>
				<Clock totalSeconds={count}/>
				{renderControlArea()}
			</div>
		);
	},
	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});

			if (newCount === 0) {
				this.setState({countdownStatus: "stopped"})
			}
		}, 1000)
	}
});

module.exports = CountDown;