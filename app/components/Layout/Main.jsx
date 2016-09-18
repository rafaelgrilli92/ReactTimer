// Stateless Functional Component

var React = require('react');
var NavBar = require('Nav');

var Main = (props) => {
	return (
		<div>
			<div>
				<NavBar />
				<div>
				<p>Main.jsx Rendered</p>
					{props.children}
				</div>
			</div>			
		</div>
	)
}

module.exports = Main;