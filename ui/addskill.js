/** @jsx React.DOM */

var UIAddSkill = React.createClass({
	getInitialState: function() {
		return {
			hero: null,
			filter: ""
		};
	},

	render: function() {
		if (!this.state.hero) return null;
		var that = this;

		var className = this.state.hero.get("class");
		var skills = data.classes[className].skills;
		var skillList = [];
		for (var skill in skills) {
			if (skill.toLowerCase().indexOf(this.state.filter.toLowerCase()) == -1) continue;

			var cost = skills[skill];
			skillList.push(
				<button
					className="next skill"
					key={skill}
					onClick={that._add.bind(that, skill)}>
					{skill} ({cost} Experience)
				</button>
			);
		}

		return <div className="addskill">
			<button className="back" onClick={this._back}>Back</button>
			<input type="text" value={this.state.filter} onChange={this._onChange}></input>
			<div className="skills">
				{skillList}
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
  		hero: dropbox.heroes.get(this.props.heroid)
  	});
  },

  _onChange: function(event) {
  	this.setState({ filter: event.target.value });
  },

  _back: function() {
  	Events.publish("section", "herodetails");
  },

  _add: function(skill) {
  	var skills = this.state.hero.get("skills").toArray();
  	skills.push(skill);
  	this.state.hero.set("skills", skills);

  	Events.publish("section", "herodetails");
  }
});