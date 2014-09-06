/** @jsx React.DOM */

var UINewScenario = React.createClass({
	getInitialState: function() {
		return {
			game: null,
			scenarios: null
		};
	},

	render: function() {
		if (!this.state.game) return null;

		var campaign = this.state.game.get("campaign");
		var scenarioList = [];
		var allScenarios = data.campaigns[campaign];
		for (var scenarioName in allScenarios) {
			var scenario = allScenarios[scenarioName];

			// can't replay scenarios
			if (this.state.scenarios.filter(function(s) {
				return s.get("name") == scenarioName;
			}).length > 0) continue;

			// scenario requirements must be satisfied
			var requirements = scenario.valid;
			if (requirements) {
				var valid = true;
				for (var ii = 0; ii < requirements.length; ii ++) {
					var requirement = requirements[ii];
					if (requirement.act) {
						var wins = this.state.scenarios.filter(function(scenario) {
							return scenario.get("act") == requirement.act;
						}).map(function(scenario) {
							if (requirement.winner == "any" || scenario.get("winner").toLowerCase() == requirement.winner) return 1;
							return 0;
						}).reduce(function(a, b) { return a + b; }, 0);
						if (wins < requirement.count[0] || wins > requirement.count[1]) { valid = false; break; }
					} else if (requirement.scenario) {
						var wins = this.state.scenarios.filter(function(scenario) {
							return scenario.get("name") == requirement.scenario;
						}).map(function(scenario) {
							if (requirement.winner == "any" || scenario.get("winner").toLowerCase() == requirement.winner) return 1;
							return 0;
						}).reduce(function(a, b) { return a + b; }, 0);
						if (wins < requirement.count[0] || wins > requirement.count[1]) { valid = false; break; }
					}
				}
				if (!valid) continue;
			}

			scenarioList.push(
				<div key={scenarioName}>
					<h3>{scenario.act}: {scenarioName}</h3>
					<button onClick={this._newScenario.bind(this, scenarioName, scenario.act, "Heroes")}>Heroes Won</button>
					<button onClick={this._newScenario.bind(this, scenarioName, scenario.act, "Overlord")}>Overlord Won</button>
				</div>
			);
		}

		return <div>
		<button className="back" onClick={this._back}>Back</button>
			<h2>Choose a Scenario</h2>
			{scenarioList}
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

  _newScenario: function(scenario, act, winner) {
  	dropbox.scenarios.insert({
  		"gameid": this.props.gameid,
  		"name": scenario,
  		"act": act,
  		"winner": winner
		});
		this._back();
  },

  _back: function() {
  	Events.publish("section", "gamedetails");
  }
});