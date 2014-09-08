/** @jsx React.DOM */

var UIHeroSummary = React.createClass({
  getInitialState: function() {
    return {
      game: null,
      heroes: null,
      won: null,
      heroName: null,
      playerName: null,
      className: null
    };
  },

  render: function() {
    if (!this.state.heroes) return null;
    var that = this;

    var classes = Object.getOwnPropertyNames(data.classes)
      .map(function(className) {
        return <option key={className} value={className}>{className}</option>;
      });
    classes.unshift(<option key={null} value={null}>Not Selected</option>);

    if (this.state.heroes.length < 4) {
      var newHero = <div>
        <div className="newhero">
          <div>Hero Name</div>
          <input type="text" placeholder="Hero Name" value={this.state.heroName} onChange={this._onChangeName} />
          <div>Player Name</div>
          <input type="text" placeholder="Player Name" value={this.state.playerName} onChange={this._onChangePlayer} />
          <div>Hero Class</div>
          <select onChange={this._onChangeClass}>{classes}</select>
        </div>
        <button className="next" onClick={this._newHero}>Create Hero</button>
      </div>;
    }

    var winCount = this.state.won.length;
    var gold = that.state.game.get("heroGold");
    var experience = that.state.game.get("heroExperience");
    var heroes = this.state.heroes.map(function(hero) {
      var name = hero.get("name");
      var className = hero.get("class");
      var playerName = hero.get("player");
      var skills = hero.get("skills").toArray().join(", ");
      var items = hero.get("items").toArray().join(", ");
      var spentExperience = hero.get("skills").toArray()
        .map(function(skill) {
          return data.classes[className].skills[skill] || data.skills && data.skills[skill] || 0;
        })
        .reduce(function(exp1, exp2) {
          return exp1 + exp2;
        }, 0);
      var unspentExperience = experience - spentExperience;

      return <div key={hero.getId()} className={"hero " + data.classes[className].archetype.toLowerCase()} onClick={that._onEdit.bind(that, hero.getId())}>
        <div className="name">{name}</div>
        <div className="class">the {className}</div>
        <div className="player">played by {playerName}</div>
        <div className="experience">{unspentExperience} Experience</div>
      </div>;
    });

    return <div className="heroes">
      <div className="summary">
        <div className="title">Party</div>
        <div className="wins">{winCount} Wins</div>
        <div className="experience">
          {experience} Experience
        </div>
        <div className="gold">
          {gold} Gold
        </div>
      </div>
      <div className="actions">
        <button className="experience remove" onClick={this._removeExperience}>-1 Exp</button>
        <button className="experience add" onClick={this._addExperience}>+1 Exp</button>
        <button className="gold remove" onClick={this._removeGold}>-25 Gold</button>
        <button className="gold add" onClick={this._addGold}>+25 Gold</button>
      </div>
      <div className="list">
        {heroes}
        {newHero}
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
      heroes: dropbox.heroes.query({ gameid: this.props.gameid }),
      won: dropbox.scenarios.query({ gameid: this.props.gameid, winner: "Heroes" })
    });
  },

  _onChangeName: function(event) {
    this.setState({ heroName: event.target.value });
  },

  _onChangePlayer: function(event) {
    this.setState({ playerName: event.target.value });
  },

  _onChangeClass: function(event) {
    this.setState({ className: event.target.value });
  },

  _addExperience: function() {
    this.state.game.set("heroExperience", this.state.game.get("heroExperience") + 1);
  },

  _removeExperience: function() {
    this.state.game.set("heroExperience", Math.max(0, this.state.game.get("heroExperience") - 1));
  },

  _addGold: function() {
    this.state.game.set("heroGold", this.state.game.get("heroGold") + 25);
  },

  _removeGold: function() {
    this.state.game.set("heroGold", Math.max(0, this.state.game.get("heroGold") - 25));
  },

  _newHero: function() {
    if (!this.state.heroName) return;
    if (!this.state.playerName) return;
    if (!this.state.className) return;
    var that = this;

    var starterSkills = Object.getOwnPropertyNames(data.classes[this.state.className].skills)
      .filter(function(skill) {
        return data.classes[that.state.className].skills[skill] == 0;
      });

    var starterItems = data.classes[that.state.className].items;

    var hero = dropbox.heroes.insert({
      "gameid": this.props.gameid,
      "name": this.state.heroName,
      "player": this.state.playerName,
      "class": this.state.className,
      "skills": starterSkills,
      "items": starterItems
    });
  },

  _onEdit: function(heroid) {
    Events.publish("heroid", heroid);
    Events.publish("section", "herodetails");
  }
});