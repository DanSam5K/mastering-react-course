import { completePage } from './children.js';

const element = React.createElement('h1', { id: 'recipe-0' }, 'Hello React');

const dish = React.createElement('h2', null, 'baked bean');
const dessert = React.createElement('h2', null, 'Coconut Cream Pie');

const list = React.createElement(
  'ul',
  null,
  React.createElement('li', null, '2 lb salmon'),
  React.createElement('li', null, '5 sprigs fresh rosemary'),
  React.createElement('li', null, '2 tablespoons olive'),
  React.createElement('li', null, '2 small lemons'),
  React.createElement('li', null, '1 Teaspoon kosher salt'),
  React.createElement('li', null, '4 cloves of chopped garlic')
);

ReactDOM.render([completePage], document.getElementById('root'));
