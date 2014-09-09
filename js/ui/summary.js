/** @jsx React.DOM */

var UISummary = React.createClass({
	render: function() {
		var game = dropbox.games.get(this.props.gameid);

		return <div>
			<button className="back" onClick={this._back}>Back</button>
			<UIGameSummary gameid={this.props.gameid} />
			<UIOverlordSummary gameid={this.props.gameid} />
			<UIHeroSummary gameid={this.props.gameid} />
		</div>;
	},

  _back: function() {
  	Events.publish("gameid", null);
  }
});