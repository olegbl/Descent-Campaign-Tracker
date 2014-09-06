/** @jsx React.DOM */

var UIAddItem = React.createClass({
	getInitialState: function() {
		return {
			hero: null,
			filter: ""
		};
	},

	render: function() {
		if (!this.state.hero) return null;
		var that = this;

		var acts = Object.getOwnPropertyNames(data.items)
			.map(function(act) {
				if (act === "Overlord Relics") return null;
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

		return <div className="additem">
			<button className="back" onClick={this._back}>Back</button>
			<input type="text" placeholder="Filter items..." value={this.state.filter} onChange={this._onChange}></input>
			<div className="items">
				{acts}
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

  _add: function(item) {
  	var items = this.state.hero.get("items").toArray();
  	items.push(item);
  	this.state.hero.set("items", items);

  	Events.publish("section", "herodetails");
  }
});