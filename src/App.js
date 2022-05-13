import './App.css'
import { useState, useEffect, useRef } from 'react'
import Stories from './Stories'
import PulseLoader from 'react-spinners/PulseLoader'

const App = () => {
  const [textInput, setTextInput] = useState('')
  const [responses, setResponses] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const isFirstLoad = useRef(true)

  useEffect(() => {
    if (responses && !isFirstLoad.current) {
      localStorage.setItem('stories', JSON.stringify(responses))
    }
    if (responses && !responses[0] && isFirstLoad.current) {
      isFirstLoad.current = false
      setResponses(() => {
        const stories = JSON.parse(localStorage.getItem('stories'))
        if (!stories) {
          return []
        } else {
          return stories
        }
      })
    }
  }, [responses])

  const handleTextInput = (e) => {
    setTextInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const dataToSend = {
      prompt: textInput,
      temperature: 0.5,
      max_tokens: 256,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }
    PostSubmission(dataToSend)
  }

  const clearInput = () => {
    setTextInput('')
  }

  const PostSubmission = async (dataToSend) => {
    try {
      setIsLoading(true)
      const response = await fetch(
        'https://api.openai.com/v1/engines/text-curie-001/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_APIKEY}`
          },
          body: JSON.stringify(dataToSend)
        }
      )
      if (response.ok) {
        const data = await response.json()
        const newEntry = {
          id: Date.now(),
          input: dataToSend.prompt,
          response: data.choices[0].text
        }
        setResponses((prev) => [newEntry, ...prev])
        clearInput()
        setIsLoading(false)
      } else {
        setIsLoading(false)
        setErrorMsg('Something went wrong, please try again later')
        throw new Error(response.status)
      }
    } catch (error) {
      setIsLoading(false)
      setErrorMsg('Something went wrong, please try again later')
      throw new Error(error.message)
    }
  }

  const handleDelete = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    setResponses((prev) =>
      prev.filter((card) => {
        console.log('card id', card.id)
        console.log('e target id', e.target.id)
        return card.id != e.target.id
      })
    )
  }

  return (
    <div className='App'>
      {isLoading && (
        <div className='loading-view'>
          <PulseLoader className='spinner' color={'#004c3e'} size={'2vw'} />
        </div>
      )}
      <section className='main-view'>
        <h1 className='main-title'>where will your next adventure take you?</h1>
        <form>
          <label htmlFor='form-input'>
            Ask the AI to tell you an adventure about a place or time of your choosing
          </label>
          <textarea
            className='form-item'
            name='form-input'
            rows='2'
            value={textInput}
            onChange={handleTextInput}
            placeholder='Tell me a story about the skateboarding king sent back in time to the stone age'
          ></textarea>
          <button
            disabled={!textInput}
            className='submit-button form-item'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        {responses && responses[0] ? (
          <Stories handleDelete={handleDelete} responses={responses} />
        ) : (
          <h2 style={{ fontSize: '1.3rem' }}>
            {!errorMsg ? 'No responses yet, tell your story!' : errorMsg}
          </h2>
        )}
      </section>
    </div>
  )
}

export default App
