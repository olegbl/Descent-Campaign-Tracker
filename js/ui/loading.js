/** @jsx React.DOM */

var UILoading = React.createClass({
	render: function() {
		return <div className="loading">
			<div className="logo">
				<img src="logo.png" />
			</div>
			Loading. Please wait.
		</div>;
	}
});