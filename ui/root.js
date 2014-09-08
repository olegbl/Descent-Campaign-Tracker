/** @jsx React.DOM */

var UIRoot = React.createClass({
  getInitialState: function() {
    return {
      ready: false,
      gameid: null,
      heroid: null,
      section: "init"
    };
  },

  componentDidMount: function() {
    var that = this;

    dropbox.init(function() {
      that._updateData();
      dropbox.datastore.recordsChanged.addListener(that._updateData);
      that.setState({ section: "gamelist" });
    }, function() {
      that.setState({ section: "login" });
    });

    Events.listen("gameid", function(gameid) {
      that.setState({ gameid: gameid, section: !!gameid ? "summary" : "gamelist" });
    });

    Events.listen("heroid", function(heroid) {
      that.setState({ heroid: heroid });
    });

    Events.listen("section", function(section) {
      that.setState({ section: section });
    });
  },

  render: function() {
    return <div>
      {this.renderHeader()}
      {this.renderContent()}
    </div>
  },

  renderHeader: function() {
    return <div className="header">
      Descent Campaign Tracker
    </div>
  },

  renderContent: function() {
    if (this.state.section == "init") {
      return <UILoading gameid={this.state.gameid} />;
    }

    if (!dropbox.isAuthenticated()) {
      return <UILogin gameid={this.state.gameid} />;
    }

    if (this.state.section == "gamelist") {
      return <UIGameList gameid={this.state.gameid} />;
    }

    if (this.state.section == "summary") {
      return <UISummary gameid={this.state.gameid} />;
    }

    if (this.state.section == "gamedetails") {
      return <UIGameDetails gameid={this.state.gameid} />;
    }

    if (this.state.section == "newscenario") {
      return <UINewScenario gameid={this.state.gameid} />;
    }

    if (this.state.section == "overlorddetails") {
      return <UIOverlordDetails gameid={this.state.gameid} />;
    }

    if (this.state.section == "herodetails") {
      return <UIHeroDetails gameid={this.state.gameid} heroid={this.state.heroid} />;
    }

    if (this.state.section == "addskill") {
      return <UIAddSkill gameid={this.state.gameid} heroid={this.state.heroid} />;
    }

    if (this.state.section == "additem") {
      return <UIAddItem gameid={this.state.gameid} heroid={this.state.heroid} />;
    }

    if (this.state.section == "addskilloverlord") {
      return <UIAddSkillOverlord gameid={this.state.gameid} />;
    }

    if (this.state.section == "additemoverlord") {
      return <UIAddItemOverlord gameid={this.state.gameid} />;
    }
  },

  _updateData: function() {
    data.skills = {};
    dropbox.skills.query().forEach(function(record) {
      data.skills[record.get("name")] = record.get("cost");
    });
  },
});