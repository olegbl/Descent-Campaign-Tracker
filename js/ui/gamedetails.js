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
      return <div className="scenario">
        <span className="act">{scenario.get("act")}</span>
        {': '}
        <span className="name">{scenario.get("name")}</span>
        {' - '}
        <span className="winner">{scenario.get("winner")}</span>
      </div>;
    });

    return <div className="gamedetails">
      <button className="back" onClick={this._back}>Back</button>
      <div className="info">
        <div className="name">{name}</div>
        <div className="campaign">{campaign}</div>
      </div>
      <div className="sectionheader">Notes</div>
      <div className="notes">
        <textarea value={this.state.game.get("notes")} onChange={this._onChangeNotes} placeholder="Notes about the game..." rows={5}></textarea>
      </div>
      <div className="sectionheader">Scenarios Played</div>
      <button className="next" onClick={this._chooseScenario}>Next Scenario</button>
      <div className="scenarios">
        {scenarios}
      </div>
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

  _onChangeNotes: function(event) {
    console.log("notes", event.target.value);
    this.state.game.set("notes", event.target.value);
  },

  _chooseScenario: function() {
    Events.publish("section", "newscenario");
  },

  _back: function() {
    Events.publish("section", "summary");
  }
});