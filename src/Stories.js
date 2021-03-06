import Card from './Card'
import './Stories.css'

const Stories = ({ responses, handleDelete }) => {
  let cards
  if (responses && responses[0]) {
    cards = responses.map((story) => {
      return (
        <Card
          key={story.id}
          id={story.id}
          input={story.input}
          response={story.response}
          handleDelete={handleDelete}
        />
      )
    })
  }

  return <section className='stories'>{cards}</section>
}

export default Stories
