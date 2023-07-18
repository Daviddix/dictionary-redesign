import { useEffect, useLayoutEffect, useState } from "react"
import settings from "../../../assets/icons/settings.svg"
import RecentWord from "../../Components/RecentWord/RecentWord"
import SearchBar from "../../Components/SearchBar/SearchBar"
import Settings from "../../Components/Settings/Settings"
import "./HomePage.css"
import EmptyRecentWord from "../../Components/EmptyRecentWord/EmptyRecentWord"

function HomePage({recentWords,setRecentWords}) {
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [activeAccentColor, setActiveAccentColor] = useState(()=> localStorage.getItem("active-accent-color") || "purple")

  useEffect(() => {
    setRecentWords(noDuplicates) 
  }, [])

  const noDuplicates = [...new Set(recentWords)]
  const noDuplicatesMapped = noDuplicates.map((word)=>{
    return <RecentWord 
    recentWords={recentWords}
    setRecentWords={setRecentWords}
    key={word}
    word={word} />
  })

  
  

 

  function toggleSettingsModal(){
    setShowSettingsModal((prev)=> !prev)
  }
  return (
    <main className='homepage-main'>
    <header className="homepage-header">
      <div className="left">
        <h1>Dictionary</h1>
        <p>get definition to words</p>
      </div>

      <button
      onClick={toggleSettingsModal}
      >
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
        className="feather feather-settings">
          <circle cx="12" cy="12" r="3">
            </circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
              </path>
          </svg>
      </button>
    </header>

    <SearchBar />

    <div className="recent-words-container">
      <div className="headings">
        <h1>Recent Words</h1>

      {recentWords.length > 0 && 
      <button
      onClick={()=>{
        // localStorage.setItem("recent-words-from-dictionary", JSON.stringify([]))
        setRecentWords([])
      }}
      >Clear All</button>
      }
      </div>      

      <div className="recent-words">
        {noDuplicatesMapped}
      </div>

     {recentWords.length == 0 && <EmptyRecentWord />}

    </div>

    {showSettingsModal && <Settings 
    activeAccentColor={activeAccentColor}
    setActiveAccentColor={setActiveAccentColor}
    toggleSettingsModal={toggleSettingsModal} />}
  </main>
  )
}

export default HomePage