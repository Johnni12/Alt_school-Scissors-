'use client'
import axios from 'axios'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'


function UrlHome() {
  const [inputValue, setInputValue] = useState('')
  const [shortenLink, setShortenLink] = useState('')
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  const accessToken = '042e9b77f8ef214b1f1b16cd1685457972feaa85' 

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        {
          long_url: inputValue,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      )
      setShortenLink(res.data.link)
    } catch (err) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      fetchData()
    }
  }

  const handleInputChange = (e:any) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='contain'>
      <div className='url-shortener'>
        <h1 className='title'>
          URL <span>Shortener</span>
        </h1>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Paste a link to shorten it'
            value={inputValue}
            onChange={handleInputChange}
            className='input'
          />
          <button onClick={handleClick} className='button'>
            Shorten
          </button>
        </div>
      </div>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : error ? (
        <p className='error'>Something went wrong: {error}</p>
      ) : (
        shortenLink && (
          <div className='shorten-link'>
            <p className='py-4 text-gray-200'>{shortenLink}</p>
            <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
              <button className={copied ? 'copy-button copied' : 'copy-button'}>
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
            </CopyToClipboard>
          </div>
        )
      )}
    </div>
  )
}

export default UrlHome