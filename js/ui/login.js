/** @jsx React.DOM */

var UILogin = React.createClass({
	render: function() {
		return <div className="login">
			<button onClick={this._onClick}>Login with Dropbox</button>
		</div>;
	},

	_onClick: function() {
		dropbox.client.authenticate();
	}
});