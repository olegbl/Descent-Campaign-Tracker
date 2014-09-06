/** @jsx React.DOM */

var UIOverlordDetails = React.createClass({
	getInitialState: function() {
		return {
			game: null
		};
	},

	render: function() {
		if (!this.state.game) return null;

		var experience = this.state.game.get("overlordExperience");
		var skills = this.state.game.get("overlordSkills");
		var items = this.state.game.get("overlordItems");

		var spentExperience = 0; // TODO
		var unspentExperience = experience - spentExperience;

		return <div className="editoverlord">
			<button className="back" onClick={this._back}>Back</button>
			<div>
				<div>
					Total Experience: {experience}
					<button onClick={this._addExperience}>+1</button>
					<button onClick={this._removeExperience}>-1</button>
				</div>
				<div>Unspent Experience {unspentExperience}</div>
			</div>
			<div>TODO: see skills</div>
			<div>TODO: see items</div>
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
  		game: dropbox.games.get(this.props.gameid)
  	});
  },

  _addExperience: function() {
  	this.state.game.set("overlordExperience", this.state.game.get("overlordExperience") + 1);
  },

  _removeExperience: function() {
  	this.state.game.set("overlordExperience", Math.max(0, this.state.game.get("overlordExperience") - 1));
  },

  _back: function() {
  	Events.publish("section", "summary");
  }
});