import axios from 'axios'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface LinkResultProps {
  inputValue: string
}

const LinkResult: React.FC<LinkResultProps> = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState<string>('')
  const [copied, setCopied] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      )
      setShortenLink(res.data.result.full_short_link)
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error ?? 'An error occurred')
      } else {
        setError('An error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (inputValue.length) {
      fetchData()
    }
  }, [inputValue])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [copied])

  if (loading) {
    return <p className='noData'>Loading...</p>
  }
  if (error) {
    return <p className='noData'>Something went wrong: {error}</p>
  }

  return (
    <>
      {shortenLink && (
        <div className='result'>
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? 'copied' : ''}>
              Copy to Clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  )
}

export default LinkResult
