import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div>
      <input type="text" name="query" id="query" placeholder="e.g. 'React'" aria-label="search query"/>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  )
}

export default SearchBar;