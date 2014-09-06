/** @jsx React.DOM */

var UIHeroSummary = React.createClass({
	getInitialState: function() {
		return {
			game: null,
			heroes: null,
			heroName: null,
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
		classes.unshift(<option key="Not Selected" value="Not Selected">Not Selected</option>);

		if (this.state.heroes.length < 4) {
			var newHero = <div>
				<div className="newhero">
					<div>Hero Name</div>
					<input type="text" placeholder="Hero Name" value={this.state.heroName} onChange={this._onChangeName} />
					<div>Hero Class</div>
					<select onChange={this._onChangeClass}>{classes}</select>
				</div>
				<button className="next" onClick={this._newHero}>Create Hero</button>
			</div>;
		}

		var gold = that.state.game.get("heroGold");
		var experience = that.state.game.get("heroExperience");
		var heroes = this.state.heroes.map(function(hero) {
			var name = hero.get("name");
			var className = hero.get("class");
			var skills = hero.get("skills").toArray().join(", ");
			var items = hero.get("items").toArray().join(", ");
			var spentExperience = hero.get("skills").toArray()
				.map(function(skill) {
					return data.classes[className].skills[skill];
				})
				.reduce(function(exp1, exp2) {
					return exp1 + exp2;
				});
			var unspentExperience = experience - spentExperience;

			return <div className={"hero " + className.toLowerCase()} onClick={that._onEdit.bind(that, hero.getId())}>
				<div className="name">{name}</div>
				<div className="class">{className}</div>
				<div className="experience">{unspentExperience} Experience</div>
			</div>;
		});

		return <div className="heroes">
			<div className="herosummary">
				<div className="title">Party</div>
				<div>
					Total Experience: {experience}
					<button onClick={this._addExperience}>+1</button>
					<button onClick={this._removeExperience}>-1</button>
				</div>
				<div>
					Unspent Gold: {gold}
					<button onClick={this._addGold}>+25</button>
					<button onClick={this._removeGold}>-25</button>
				</div>
			</div>
			<div className="herolist">
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
  		heroes: dropbox.heroes.query({ gameid: this.props.gameid })
  	});
  },

  _onChangeName: function(event) {
  	this.setState({ heroName: event.target.value });
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
  	if (!this.state.className) return;
  	var that = this;

		var startedSkills = Object.getOwnPropertyNames(data.classes[this.state.className].skills)
			.filter(function(skill) {
				return data.classes[that.state.className].skills[skill] == 0;
			});

  	var startedItems = Object.getOwnPropertyNames(
  		data.classes[that.state.className].items
		);

  	var hero = dropbox.heroes.insert({
  		"gameid": this.props.gameid,
			"name": this.state.heroName,
			"class": this.state.className,
			"skills": startedSkills,
			"items": startedItems
		});
  },

  _onEdit: function(heroid) {
  	Events.publish("heroid", heroid);
  	Events.publish("section", "herodetails");
  }
});