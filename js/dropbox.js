/** @jsx React.DOM */

var dropbox = {
  client: new Dropbox.Client({ key: "2j3aro8xxw5znaq" }),

  isAuthenticated: function() {
    return this.client.isAuthenticated();
  },

  init: function(success, fail) {
    dropbox.client.authenticate({ interactive: false }, function(error) {
      if (error) {
        console.error("dropbox authentication error", error);
      }
    });

    if (!dropbox.isAuthenticated()) {
      fail && fail();
      return;
    }

    dropbox.manager = dropbox.client.getDatastoreManager();
    dropbox.manager.openDefaultDatastore(function(error, datastore) {
      if (error) {
        console.error("dropbox datastore error", error);
        fail && fail();
        return;
      }

      dropbox.datastore = datastore;
      // id | name | campaign | notes
      // | heroExperience | heroGold
      // | overlordExperience | overlordSkills | overlordItems
      dropbox.games = dropbox.datastore.getTable("games");
      // gameid | name | act | winner
      dropbox.scenarios = dropbox.datastore.getTable("scenarios");
      // gameid | name | player | class | skills | items
      dropbox.heroes = dropbox.datastore.getTable("heroes");
      // gameid | name | cost
      dropbox.skills = dropbox.datastore.getTable("skills");

      success && success();
    });
  }
};