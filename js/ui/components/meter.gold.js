/** @jsx React.DOM */

var UIGoldMeter = React.createClass({
  render: function() {
    return <UIMeter
      className="gold"
      value={this.props.value + " " + (this.props.label || "Gold")}
      step={25}
      onAdd={this.props.onAdd}
      onSubtract={this.props.onSubtract}
    ></UIMeter>;
  }
});