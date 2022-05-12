import React from 'react'

const Card = ({ id, input, response }) => {
  return (
    <article className='card'>
      <h3 className='prompt'>prompt: {input}</h3>
      <h3 className='response'>response: {response}</h3>
    </article>
  )
}

export default Card
