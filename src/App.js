import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [textInput, setTextInput] = useState('')
  const [responses, setResponses] = useState([])

  const handleTextInput = (e) => {
    setTextInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const dataToSend = {
      prompt: textInput,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }

    fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      },
      body: JSON.stringify(dataToSend)
    })
  }

  return (
    <div className='App'>
      <section className='main-view'>
        <h1 className='main-title'>where will your next adventure take you?</h1>
        <form>
          <label htmlFor='form-input'>
            Ask the AI to tell you an adventure about a place or time of your choosing
          </label>
          <textarea
            className='form-item'
            name='form-input'
            cols='75'
            rows='2'
            value={textInput}
            onChange={handleTextInput}
            placeholder='Tell me a story about the skateboarding king sent back in time to the stone age'
          ></textarea>
          <button className='submit-button form-item' onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <section className='responses'>
          {responses && responses[0] ? (
            { responses }
          ) : (
            <h2 style={{ fontSize: '1.3rem' }}>No responses yet, ask for an adventure</h2>
          )}
        </section>
      </section>
    </div>
  )
}

export default App
