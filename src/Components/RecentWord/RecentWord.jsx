import x from "../../../assets/icons/x-circle.svg"
import "./RecentWord.css"

function RecentWord() {
  return (
    <div className="recent-word">
    <p>Amazing</p>
    
    <button>
    <img src={x} alt="delete recent word" />
    </button>
  </div>
  )
}

export default RecentWord