/** @jsx React.DOM */

var UIMeter = React.createClass({
  getDefaultProps: function() {
    return {
      className: "",
      value: 0,
      step: 1,
      onAdd: null,
      onSubtract: null
    };
  },

  render: function() {
    return <div className={"ui-meter " + this.props.className}>
      <div className="count">{this.props.value}</div>
      {this.renderAddButton()}
      {this.renderSubtractButton()}
    </div>;
  },

  renderAddButton: function() {
    if (!this.props.onAdd) { return null; }
    return <div className="button add" onClick={this.props.onAdd}>+{this.props.step}</div>;
  },

  renderSubtractButton: function() {
    if (!this.props.onSubtract) { return null; }
    return <div className="button subtract" onClick={this.props.onSubtract}>-{this.props.step}</div>;
  }
});