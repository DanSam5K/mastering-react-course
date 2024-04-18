const element = React.createElement('h1', { id: 'recipe-0' }, 'Hello React');

const dish = React.createElement('h2', null, 'baked bean');
const dessert = React.createElement('h2', null, 'Coconut Cream Pie');

console.log(element);
ReactDOM.render([element, dish, dessert], document.getElementById('root'));
