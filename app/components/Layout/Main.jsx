// Stateless Functional Component

var React = require('react');
var NavBar = require('Nav');

var Main = (props) => {
	return (
		<div>
			<NavBar />
			<div className="row">
				<div className="column small-centered medium-6 large-4">
					{props.children}
				</div>
			</div>			
		</div>
	)
}

module.exports = Main;