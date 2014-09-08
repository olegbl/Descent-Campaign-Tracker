/** @jsx React.DOM */

var UIGameList = React.createClass({
  getInitialState: function() {
    return {
      games: null,
      name: "",
      campaign: null
    };
  },

  render: function() {
    if (!this.state.games) return null;
    var that = this;

    var gameList = this.state.games.map(function(record) {
      var gameid = record.getId();
      return <div key={gameid}>
        <button onClick={that._loadGame.bind(that, gameid)}>
          {record.get("name")} ({record.get("campaign")})
        </button>
        <button onClick={that._deleteGame.bind(that, gameid)}>
          Delete
        </button>
      </div>;
    });

    var campaignList = Object.getOwnPropertyNames(data.campaigns).map(function(campaign) {
      return <option key={campaign} value={campaign}>{campaign}</option>;
    });
    campaignList.unshift(<option key={null} value={null}>Not Selected</option>);

    var ready = !!this.state.campaign && !!this.state.name;

    if (gameList.length > 0) {
      var loadGame = <div>
        <div className="sectionheader">Load Game</div>
        <div className="loadgame">
          {gameList}
        </div>
      </div>;
    }

    return (
      <div>
        {loadGame}
        <div>
          <button className="next" onClick={this._newGame} disabled={!ready}>New Game</button>
          <div className="newgame">
            <h3>Label</h3>
            <input placeholder="Label for the game..." value={this.state.name} onChange={this._onChangeName} />
            <h3>Campaign</h3>
            <select onChange={this._onChangeCampaign} value={this.state.campaign}>{campaignList}</select>
          </div>
        </div>
      </div>
    );
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
      games: dropbox.games.query()
    });
  },

  _onChangeName: function(event) {
    this.setState({ name: event.target.value });
  },

  _onChangeCampaign: function(event) {
    if (event.target.value === "Not Selected") {
      this.setState({ campaign: null });
    } else {
      this.setState({ campaign: event.target.value });
    }
  },

  _newGame: function() {
    if (!this.state.name) return;
    if (!this.state.campaign) return;

    var game = dropbox.games.insert({
      "name": this.state.name,
      "campaign": this.state.campaign,
      "notes": "",
      "heroExperience": 0,
      "heroGold": 0,
      "overlordExperience": 0,
      "overlordSkills": data.overlord.start,
      "overlordItems": []
    });

    Events.publish("gameid", game.getId());
  },

  _loadGame: function(gameid) {
    Events.publish("gameid", gameid);
  },

  _deleteGame: function(gameid) {
    dropbox.games.get(gameid).deleteRecord();
  }
});