const React = require('react');
const ListItem = require('./ListItem.jsx');

const ingredients = [{"id": 1, "text": "flank steak"}, {"id": 2, "text": "grilled vegetables"}, {"id": 3, "text": "guacamole"}, {"id": 4, "text": "flour tortilla"}, {"id": 5, "text": "Negro Modelo w/lime"} ];

const List = React.createClass({
  render() {
    const listItems = ingredients.map((item) => {
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return <div>
        <h1>Favorite Meal:</h1>
        <h3>Carne Asada</h3>
        <ul>{ listItems }</ul>
      </div>;
  }
});

module.exports = List;
