var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
	return (
		<div className="top-bar">
		  <div className="top-bar-left">
		    <ul className="menu">
		     	<li className="menu-text">React Timer App</li>
		        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
				<li><Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Coutdown</Link></li>
		    </ul>
		  </div>
		   <div className="top-bar-right">
		   		<ul className="menu">
			   		<li className="menu-text">
			   			Created by <a target="_blank" href="https://github.com/rafaelgrilli92">Rafael Grilli</a>
			   		</li>
		   		</ul>
		   </div>
		</div>
	);
}

module.exports = Nav;