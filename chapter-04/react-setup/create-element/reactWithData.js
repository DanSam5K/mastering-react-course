// We can easily extract the data
const items = [
  '2 lb salmon',
  '5 sprigs fresh rosemary',
  '2 tablespoons olive oil',
  '2 small lemons',
  '1 teaspoon kosher salt',
  '4 cloves of chopped garlic',
];

export const dataElement = React.createElement(
  'ul',
  {
    className: 'ingredients',
  },
  items.map((ingredient, i) =>
    React.createElement('li', { key: i }, ingredient)
  )
);
