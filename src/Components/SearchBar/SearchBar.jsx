import search from "../../../assets/icons/search.svg"
import "./SearchBar.css"


function SearchBar() {
  return (
    <form className="search-bar">

    <input 
    required
    type="text" 
    placeholder='Search for a word' />

  <button type="submit">
  <img src={search} alt="search for word" />
  </button>
    </form>
  )
}

export default SearchBar