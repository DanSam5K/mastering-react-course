import { data } from './data.js';
import { Recipe } from './Recipe.js';

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
