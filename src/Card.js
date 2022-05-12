import './Card.css'

const Card = ({ id, input, response }) => {
  return (
    <article className='card'>
      <h3 className='prompt'>{input}</h3>
      <h3 className='response'>{response}</h3>
    </article>
  )
}

export default Card
