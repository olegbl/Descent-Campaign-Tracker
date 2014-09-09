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

    return <div className="overlordsummary sectionheader" onClick={this._onEdit}>
      <div className="title">Overlord</div>
      <div className="wins">{this.state.won.length} Wins</div>
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