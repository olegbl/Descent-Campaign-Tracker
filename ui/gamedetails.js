/** @jsx React.DOM */

var UIGameDetails = React.createClass({
	getInitialState: function() {
		return {
			game: null
		};
	},

	render: function() {
		if (!this.state.game) return null;

		var name = this.state.game.get("name");
		var campaign = this.state.game.get("campaign");
		var scenarios = this.state.scenarios.map(function(scenario) {
			return <div>
				<b>{scenario.get("winner")}</b> won <b>{scenario.get("name")}</b> (<i>{scenario.get("act")}</i>)
			</div>;
		});

		return <div>
			<button className="back" onClick={this._back}>Back</button>
			<button className="next" onClick={this._chooseScenario}>New Scenario</button>
			<h2>{name}</h2>
			<div>Campaign: {campaign}</div>
			<div>Scenarios Played: {scenarios}</div>
		</div>;
	},

	componentDidMount: function() {
		this._updateData();
		dropbox.datastore.recordsChanged.addListener(this._updateData);
  },

  componentWillUnmount: function() {
  	dropbox.datastore.recordsChanged.removeListener(this._updateData);
  },

  _updateData: function() {
  	this.setState({
  		game: dropbox.games.get(this.props.gameid),
  		scenarios: dropbox.scenarios.query({ gameid: this.props.gameid })
  	});
  },

  _chooseScenario: function() {
  	Events.publish("section", "newscenario");
  },
  _back: function() {
  	Events.publish("section", "summary");
  }
});