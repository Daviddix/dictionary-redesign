import { useLayoutEffect, useState } from "react"
import settings from "../../../assets/icons/settings.svg"
import RecentWord from "../../Components/RecentWord/RecentWord"
import SearchBar from "../../Components/SearchBar/SearchBar"
import Settings from "../../Components/Settings/Settings"
import "./HomePage.css"

function HomePage() {
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [activeAccentColor, setActiveAccentColor] = useState(()=> localStorage.getItem("active-accent-color") || "purple")

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
        <img 
        src={settings} 
        alt="open settings"
        />
      </button>
    </header>

    <SearchBar />

    <div className="recent-words-container">
      <div className="headings">
        <h1>Recent Words</h1>

      <button>Clear All</button>
      </div>      

      <div className="recent-words">
      
      </div>

      <p className="no-recent-word">
        Seems like you don't have any recent words yet, try searching for one!
      </p>

    </div>

    {showSettingsModal && <Settings 
    activeAccentColor={activeAccentColor}
    setActiveAccentColor={setActiveAccentColor}
    toggleSettingsModal={toggleSettingsModal} />}
  </main>
  )
}

export default HomePage