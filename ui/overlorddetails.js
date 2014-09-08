/** @jsx React.DOM */

var UIOverlordDetails = React.createClass({
  getInitialState: function() {
    return {
      game: null
    };
  },

  render: function() {
    if (!this.state.game) return null;
    var that = this;

    var experience = this.state.game.get("overlordExperience");
    var spentExperience = this.state.game.get("overlordSkills").toArray()
      .map(function(skill) {
        return data.overlord.skills[skill] || data.skills && data.skills[skill] || 0;
      })
      .reduce(function(exp1, exp2) {
        return exp1 + exp2;
      }, 0);
    var unspentExperience = experience - spentExperience;

    var skills = this.state.game.get("overlordSkills").toArray().map(function(skill) {
      return <div className="skill">
        {skill}
        <button className="delete" onClick={that._deleteSkill.bind(that, skill)}>Remove</button>
      </div>;
    });

    var items = this.state.game.get("overlordItems").toArray().map(function(item) {
      return <div className="item">
        {item}
        <button className="delete" onClick={that._deleteItem.bind(that, item)}>Remove</button>
      </div>;
    });


    return <div className="overlorddetails">
      <button className="back" onClick={this._back}>Back</button>
      <div className="info">
        <div className="experience">
          Total Experience: {experience}
          <button onClick={this._addExperience}>+1</button>
          <button onClick={this._removeExperience}>-1</button>
        </div>
        <div className="experience">
          Unspent Experience {unspentExperience}
        </div>
      </div>
      <div className="sectionheader">Skills</div>
      <button className="next" onClick={this._addSkill}>Add</button>
      <div className="skills">
        {skills}
      </div>
      <div className="sectionheader">Items</div>
      <button className="next" onClick={this._addItem}>Add</button>
      <div className="items">
        {items}
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
      game: dropbox.games.get(this.props.gameid)
    });
  },

  _addExperience: function() {
    this.state.game.set("overlordExperience", this.state.game.get("overlordExperience") + 1);
  },

  _removeExperience: function() {
    this.state.game.set("overlordExperience", Math.max(0, this.state.game.get("overlordExperience") - 1));
  },

  _addSkill: function() {
    Events.publish("section", "addskilloverlord");
  },

  _deleteSkill: function(skill) {
    var skills = this.state.game.get("overlordSkills").toArray();
    var index = skills.indexOf(skill);
    if (index != -1) {
      skills.splice(index, 1);
      this.state.game.set("overlordSkills", skills);
    }
  },

  _addItem: function() {
    Events.publish("section", "additemoverlord");
  },

  _deleteItem: function(item) {
    var items = this.state.game.get("overlordItems").toArray();
    var index = items.indexOf(item);
    if (index != -1) {
      items.splice(index, 1);
      this.state.game.set("overlordItems", items);
    }
  },

  _back: function() {
    Events.publish("section", "summary");
  }
});