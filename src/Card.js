import './Card.css'

const Card = ({ id, input, response, handleDelete }) => {
  return (
    <article className='card'>
      <h3 className='prompt'>{input}</h3>
      <h3 className='response'>{response}</h3>
      <button className='delete-button' id={id} onClick={handleDelete}>
        {'\u2573'}
      </button>
    </article>
  )
}

export default Card
