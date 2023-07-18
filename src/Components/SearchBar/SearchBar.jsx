import { useNavigate } from "react-router-dom"
import "./SearchBar.css"
import { useRef, useState } from "react"


function SearchBar() {
  const navigate = useNavigate()
  const [wordToSearchFor, setWordToSearchFor] = useState("")
  const inputRef = useRef()

  return (
    <form 
    onSubmit={(e)=>{
      e.preventDefault()
      inputRef.current.blur()
      navigate(`/result/${wordToSearchFor}`)
      setWordToSearchFor("")
    }}
    className="search-bar">

    <input 
    ref={inputRef}
    value={wordToSearchFor}
    onChange={(e)=> setWordToSearchFor(e.target.value)}
    required
    type="text" 
    placeholder='Search for a word' />

  <button type="submit">
  <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  className="feather feather-search">
    <circle cx="11" cy="11" r="8">
      </circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65">
        </line>
  </svg>

  </button>
    </form>
  )
}

export default SearchBar