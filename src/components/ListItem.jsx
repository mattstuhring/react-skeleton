const React = require('react');

const ListItem = React.createClass({
  render() {
    return <div>
        <li>
          <h5>{this.props.ingredient}</h5>
        </li>
      </div>;
  }
});

module.exports = ListItem;
