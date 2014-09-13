/** @jsx React.DOM */

var UILogin = React.createClass({
	render: function() {
		return <div className="login">
			<div className="logo">
				<img src="logo.png" />
			</div>
			<div className="description">
				You can use this webapp to keep track of your campaign progress in <a href="http://www.amazon.com/Descent-Journeys-Dark-Second-Edition/dp/1616611898">Descent: Journeys in the Dark (Second Edition)</a>.
				<br /><br />
				The app stores your data in your own dropbox (it can only access the data it stores itself, and cannot access any of your personal dropbox data). Though, it can be useful to have a separate dropbox account to use with it, so you can share it between all the players.
				<br /><br />
				The app stores data on the campaign (scenario progress), the heroes (skills, experience, gold, items and classes) as well as the overlord (skills, experience, items).
				<br /><br />
				For maximum ease-of-use, try it on your phone!
			</div>
			<button onClick={this._onClick}>Login with Dropbox</button>
		</div>;
	},

	_onClick: function() {
		dropbox.client.authenticate();
	}
});