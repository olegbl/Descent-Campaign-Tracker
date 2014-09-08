/** @jsx React.DOM */

var UIAddItemOverlord = React.createClass({
  getInitialState: function() {
    return {
      game: null,
      filter: "",
      customItem: ""
    };
  },

  render: function() {
    if (!this.state.game) return null;
    var that = this;

    var acts = Object.getOwnPropertyNames(data.items)
      .map(function(act) {
        if (act !== "Overlord Relics") return null;
        var items = data.items[act].filter(function(item) {
          return item.toLowerCase().indexOf(that.state.filter.toLowerCase()) !== -1;
        }).map(function(item) {
          return <button className="next item" key={item} onClick={that._add.bind(that, item)}>{item}</button>;
        });

        return <div className="act">
          <div className="sectionheader">{act}</div>
          {items}
        </div>;
      });

    return <div className="additem overlord">
      <button className="back" onClick={this._back}>Back</button>
      <input type="text" placeholder="Search..." value={this.state.filter} onChange={this._onChange}></input>
      <div className="items">
        {acts}
      </div>
      <div className="sectionheader">Custom Items</div>
      <input type="text" placeholder="Custom Item Name" value={this.state.customItem} onChange={this._onChangeCustomItem}></input>
      <button className="next" onClick={this._addCustomItem} disabled={!this.state.customItem}>Add Custom Item</button>
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

  _onChangeCustomItem: function(event) {
    this.setState({ customItem: event.target.value });
  },

  _back: function() {
    Events.publish("section", "overlorddetails");
  },

  _add: function(item) {
    var items = this.state.game.get("overlordItems").toArray();
    items.push(item);
    this.state.game.set("overlordItems", items);
    Events.publish("section", "overlorddetails");
  },

  _addCustomItem: function() {
    if (this.state.customItem) {
      this._add(this.state.customItem);
    }
  }
});