import x from "../../../assets/icons/x-circle.svg"
import "./RecentWord.css"

function RecentWord() {
  return (
    <div className="recent-word">
    <p>Amazing</p>
    
    <button>
    <svg 
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
    </button>
  </div>
  )
}

export default RecentWord