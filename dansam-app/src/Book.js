
function Book(props) {
  const { img, title, author, briefbio } = props.book;
  let message = briefbio;
  return (
  <article className="book">
    <img src={img} alt="" /> 
    <h1>{title}</h1>
    <h5>{author}</h5>
    <button type="button" onClick={() => alert(message)}> About book</button>
  </article>
  )
}

export default Book;