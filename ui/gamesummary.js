/** @jsx React.DOM */

var UIGameSummary = React.createClass({
  getInitialState: function() {
    return {
      game: null
    };
  },

  render: function() {
    if (!this.state.game) return null;

    var name = this.state.game.get("name");
    var campaign = this.state.game.get("campaign");

    return <div className="gamesummary" onClick={this._onClick}>
      <div className="gamename">{name}</div>
      <div className="campaign">{campaign}</div>
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

  _onClick: function() {
    Events.publish("section", "gamedetails");
  },
});