import React from 'react'
import Card from './Card'

const Stories = ({ responses }) => {
  let cards
  if (responses && responses[0]) {
    cards = responses.map((story) => {
      return (
        <Card
          key={story.id}
          id={story.id}
          input={story.input}
          response={story.response}
        />
      )
    })
  }

  return <section style={{ width: '60vw' }}>{cards}</section>
}

export default Stories
