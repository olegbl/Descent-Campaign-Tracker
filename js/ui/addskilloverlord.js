/** @jsx React.DOM */

var UIAddSkillOverlord = React.createClass({
  getInitialState: function() {
    return {
      game: null,
      filter: "",
      customSkill: "",
      customSkillCost: 0
    };
  },

  render: function() {
    if (!this.state.game) return null;
    var that = this;

    var skills = data.overlord.skills;
    var skillList = [];
    for (var skill in skills) {
      if (skill.toLowerCase().indexOf(this.state.filter.toLowerCase()) == -1) continue;
      var cost = skills[skill];
      skillList.push(
        <button
          className="next skill"
          key={skill}
          onClick={that._add.bind(that, skill)}>
          {skill} ({cost})
        </button>
      );
    }

    return <div className="addskill overlord">
      <button className="back" onClick={this._back}>Back</button>
      <input type="text" placeholder="Search..." value={this.state.filter} onChange={this._onChange}></input>
      <div className="skills">
        {skillList}
      </div>
      <div className="sectionheader">Custom Skills</div>
      <input type="text" placeholder="Custom name..." value={this.state.customSkill} onChange={this._onChangeCustomSkill}></input>
      <input type="text" placeholder="Custom experience cost..." value={this.state.customSkillCost} onChange={this._onChangeCustomSkillCost}></input>
      <button className="next" onClick={this._addCustomSkill} disabled={!this.state.customSkill}>Add Custom Skill</button>
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

  _onChange: function(event) {
    this.setState({ filter: event.target.value });
  },

  _onChangeCustomSkill: function(event) {
    this.setState({ customSkill: event.target.value });
  },

  _onChangeCustomSkillCost: function(event) {
    var cost = parseInt(event.target.value, 10) || 0;
    this.setState({ customSkillCost: cost });
  },

  _back: function() {
    Events.publish("section", "overlorddetails");
  },

  _add: function(skill) {
    var skills = this.state.game.get("overlordSkills").toArray();
    skills.push(skill);
    this.state.game.set("overlordSkills", skills);
    Events.publish("section", "overlorddetails");
  },

  _addCustomSkill: function() {
    this._add(this.state.customSkill);

    dropbox.skills.insert({
      "gameid": this.props.gameid,
      "name": this.state.customSkill,
      "cost": this.state.customSkillCost
    });
  }
});