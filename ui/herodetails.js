/** @jsx React.DOM */

var UIHeroDetails = React.createClass({
  getInitialState: function() {
    return {
      game: null,
      hero: null
    };
  },

  render: function() {
    if (!this.state.hero) return null;
    var that = this;

    var name = this.state.hero.get("name");
    var className = this.state.hero.get("class");
    var experience = that.state.game.get("heroExperience");
    var spentExperience = this.state.hero.get("skills").toArray()
      .map(function(skill) {
        return data.classes[className].skills[skill] || data.skills && data.skills[skill] || 0;
      })
      .reduce(function(exp1, exp2) {
        return exp1 + exp2;
      }, 0);
    var unspentExperience = experience - spentExperience;

    var skills = this.state.hero.get("skills").toArray().map(function(skill) {
      return <div className="skill">
        {skill}
        <button className="delete" onClick={that._deleteSkill.bind(that, skill)}>Remove</button>
      </div>;
    });

    var items = this.state.hero.get("items").toArray().map(function(item) {
      return <div className="item">
        {item}
        <button className="delete" onClick={that._deleteItem.bind(that, item)}>Remove</button>
      </div>;
    });

    return <div className={"herodetails " + className.toLowerCase()}>
      <button className="back" onClick={this._back}>Back</button>
      <div className="info">
        <div className="name">{name}</div>
        <div className="class">{className}</div>
        <div className="experience">{unspentExperience} Experience</div>
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
      game: dropbox.games.get(this.props.gameid),
      hero: dropbox.heroes.get(this.props.heroid)
    });
  },

  _addSkill: function() {
    Events.publish("section", "addskill");
  },

  _deleteSkill: function(skill) {
    var skills = this.state.hero.get("skills").toArray();
    var index = skills.indexOf(skill);
    if (index != -1) {
      skills.splice(index, 1);
      this.state.hero.set("skills", skills);
    }
  },

  _addItem: function() {
    Events.publish("section", "additem");
  },

  _deleteItem: function(item) {
    var items = this.state.hero.get("items").toArray();
    var index = items.indexOf(item);
    if (index != -1) {
      items.splice(index, 1);
      this.state.hero.set("items", items);
    }
  },

  _back: function() {
    Events.publish("section", "summary");
  }
});