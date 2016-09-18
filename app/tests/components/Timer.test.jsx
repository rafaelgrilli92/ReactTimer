var React = require('react'),
	ReactDOM = require('react-dom'),
	expect = require('expect'),
	$ = require('jQuery'),
	TestUtils = require('react-addons-test-utils');

var TimerComponent = require('Timer');

describe('TimerComponent', () => {
	it('Should exist', () => {
		expect(TimerComponent).toExist();
	})
	
	describe('handleSettimer', () => {
		it('Should start timer on started status', (done) => {
			var timer = TestUtils.renderIntoDocument(<TimerComponent />);
			timer.handleStatusChange('started');

			expect(timer.state.count).toBe(0);

			setTimeout(() => {
				expect(timer.state.count).toBe(1);
				done();
			}, 1001)
		});

		it('Should pause timer on paused status', (done) => {
			var timer = TestUtils.renderIntoDocument(<TimerComponent />);
			
			timer.setState({count: 10})
			timer.handleStatusChange('started');
			timer.handleStatusChange('paused');

			setTimeout(() => {
				expect(timer.state.timerStatus).toBe('paused');
				expect(timer.state.count).toBe(10);
				done();
			}, 1001)
		});

		it('Should clear count on stopped status', (done) => {
			var timer = TestUtils.renderIntoDocument(<TimerComponent />);
			
			timer.setState({count: 10})
			timer.handleStatusChange('started');
			timer.handleStatusChange('stopped');

			setTimeout(() => {
				expect(timer.state.timerStatus).toBe('stopped');
				expect(timer.state.count).toBe(0);
				done();
			}, 1001)
		});
	});
});