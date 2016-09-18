var React = require('react'),
	ReactDOM = require('react-dom'),
	expect = require('expect'),
	$ = require('jQuery'),
	TestUtils = require('react-addons-test-utils');

var ControlsComponents = require('Controls');

describe('Controls Components', () => {
	it('Should exist', () => {
		expect(ControlsComponents).toExist();
	});

	describe('Render', () => {
		it('Should render PAUSE when started', () => {
			var controls = TestUtils.renderIntoDocument(<ControlsComponents countdownStatus="started"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pauseButton = $el.find('button:contains(Pause)');

			expect($pauseButton.length).toBe(1);
		});

		it('Should render START when paused', () => {
			var controls = TestUtils.renderIntoDocument(<ControlsComponents countdownStatus="paused"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $startButton = $el.find('button:contains(Start)');

			expect($startButton.length).toBe(1);
		});
	});
});