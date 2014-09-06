/** @jsx React.DOM */

var UIOverlordSummary = React.createClass({
	getInitialState: function() {
		return {
			game: null,
			won: null
		};
	},

	render: function() {
		if (!this.state.game) return null;

		var experience = this.state.game.get("overlordExperience");
		var skills = this.state.game.get("overlordSkills");
		var items = this.state.game.get("overlordItems");
		var winCount = this.state.won.length;

		var spentExperience = 0; // TODO
		var unspentExperience = experience - spentExperience;

		return <div className="overlordsummary sectionheader" onClick={this._onEdit}>
			<div className="title">Overlord</div>
			<div className="experience">{winCount} Wins</div>
			<div className="experience">{unspentExperience} Experience</div>
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
  		won: dropbox.scenarios.query({ gameid: this.props.gameid, winner: "Overlord" })
  	});
  },

  _onEdit: function() {
  	Events.publish("section", "overlorddetails");
  }
});