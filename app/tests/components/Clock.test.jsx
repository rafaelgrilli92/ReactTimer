var React = require('react'),
	ReactDOM = require('react-dom'),
	expect = require('expect'),
	$ = require('jQuery'),
	TestUtils = require('react-addons-test-utils');

var ClockComponent = require('Clock');

describe('Clock Component', () => {
	it('Should exist', () => {
		expect(ClockComponent).toExist();
	});

	describe('Render', () => {
		it('Should render clock to output', () => {
			var clock = TestUtils.renderIntoDocument(<ClockComponent totalSeconds={62}/>);
			var $el = $(ReactDOM.findDOMNode(clock));
			var actualText = $el.find('.clock-text').text();

			expect(actualText).toBe('01:02');
		});
	});

	describe('Format seconds', () => {
		it('Should format seconds', () => {
			var clock = TestUtils.renderIntoDocument(<ClockComponent/>);
			var seconds = 615;
			var expected = '10:15';
			var actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});

		it('Should format seconds when sec/min less than 10', () => {
			var clock = TestUtils.renderIntoDocument(<ClockComponent/>);
			var seconds = 62;
			var expected = '01:02';
			var actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});
	});
});