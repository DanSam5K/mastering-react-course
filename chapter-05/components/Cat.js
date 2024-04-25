// cat component

function Cat({ name }) {
  return (
    <>
      <h1> The cat's name is {name}</h1>
      <p>He's good cat no doubt</p>
    </>
  );
}

ReactDOM.render(<Cat name="Fluffy" />, document.getElementById('root'));
