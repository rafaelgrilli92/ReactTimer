var React = require('react'),
	ReactDOM = require('react-dom'),
	expect = require('expect'),
	$ = require('jQuery'),
	TestUtils = require('react-addons-test-utils');

var CountDownComponent = require('CountDown');

describe('CountDownComponent', () => {
	it('Should exist', () => {
		expect(CountDownComponent).toExist();
	})

	describe('handleSetCountdown', () => {
		it('Should set state to started and countdown', (done) => {
			var countdown = TestUtils.renderIntoDocument(<CountDownComponent />);
			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(() => {
				expect(countdown.state.count).toBe(9);
				done();
			}, 1001)
		});

		it('Should never count less than 0', (done) => {
			var countdown = TestUtils.renderIntoDocument(<CountDownComponent />);
			countdown.handleSetCountdown(1);

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				done();
			}, 3001)
		});
	});
});