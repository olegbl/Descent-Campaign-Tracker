/** @jsx React.DOM */

var UIExperienceMeter = React.createClass({
  render: function() {
    return <UIMeter
      className="experience"
      value={this.props.value + " " + (this.props.label || "Experience")}
      onAdd={this.props.onAdd}
      onSubtract={this.props.onSubtract}
    ></UIMeter>;
  }
});