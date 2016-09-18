var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
	componentDidUpdate: function(prevProps, prevState) {
		var actualTimerStatus = this.state.timerStatus;
		if (actualTimerStatus !== prevState.timerStatus) {
			switch(actualTimerStatus) {
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
	getInitialState: function() {
		return {
			count: 0,
			timerStatus: "paused"
		}
	},
	handleStatusChange: function(newStatus) {
		this.setState({
			timerStatus: newStatus
		});
	},
	render: function () {
		var { timerStatus, count } = this.state;

		return (
			<div>
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		);
	},
	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount
			});

			if (newCount === 0) {
				this.setState({timerStatus: "stopped"})
			}
		}, 1000)
	}
});

module.exports = Timer;