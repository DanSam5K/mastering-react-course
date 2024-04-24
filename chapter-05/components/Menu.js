import { data } from './data.js';
import Recipe from './Recipe.js';

console.log(data);
console.log(Recipe);

// function Menu(props) {
//   return (
//     <article>
//       <header>
//         <h1>{props.title}</h1>
//       </header>
//       <div className="recipes">
//         {props.recipes.map((recipe, i) => {
//           <Recipe
//             key={i}
//             name={recipe.name}
//             ingredients={recipe.ingredients}
//             steps={recipe.steps}
//           />;
//         })}
//       </div>
//     </article>
//   );
// }

// function Recipe({ name, ingredients, steps }) {
//   return (
//     <>
//       <section id={name.toLowerCase().replace(/ /g, '-')}>
//         <h1>{name}</h1>
//         <ul className="ingredients">
//           {ingredients.map((ingredient, i) => (
//             <li key={i}>{ingredient.name}</li>
//           ))}
//         </ul>
//         <section className="instructions">
//           <h2>Cooking Instructions</h2>
//           {steps.map((step, i) => (
//             <p key={i}>{step}</p>
//           ))}
//         </section>
//       </section>
//     </>
//   );
// }

// improved version of the code sample can written
// console.log(data);

function Menu2({ title, recipes }) {
  return (
    <>
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        <div className="recipes">
          {recipes.map((recipe, i) => (
            <Recipe key={i} {...recipe} />
          ))}
        </div>
      </article>
    </>
  );
}

ReactDOM.render(
  <Menu2 recipes={data} title="Delicious Recipes" />,
  document.getElementById('root')
);
