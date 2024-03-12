'use client'
import { useState } from 'react'

interface InputShortenerProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const InputShortener: React.FC<InputShortenerProps> = ({ setInputValue }) => {
  const [value, setValue] = useState<string>('')

  const handleClick = () => {
    setInputValue(value)
    setValue('')
  }

  return (
    <div className='inputContainer'>
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type='text'
          placeholder='Paste a link to shorten it'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  )
}

export default InputShortener
