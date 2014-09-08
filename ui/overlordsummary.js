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

    var skills = this.state.game.get("overlordSkills");
    var items = this.state.game.get("overlordItems");
    var winCount = this.state.won.length;
    var experience = this.state.game.get("overlordExperience");
    var spentExperience = this.state.game.get("overlordSkills").toArray()
      .map(function(skill) {
        return data.overlord.skills[skill] || data.skills && data.skills[skill] || 0;
      })
      .reduce(function(exp1, exp2) {
        return exp1 + exp2;
      }, 0);
    var unspentExperience = experience - spentExperience;

    return <div className="overlordsummary sectionheader" onClick={this._onEdit}>
      <div className="title">Overlord</div>
      <div className="wins">{winCount} Wins</div>
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