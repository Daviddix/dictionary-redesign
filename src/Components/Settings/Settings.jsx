import x from "../../../assets/icons/x-circle.svg"
import "./Settings.css"

function Settings() {
  return (
    <div className="settings-overlay">
        <div className="settings-modal">
            <button>
                <img src={x} alt="close modal" />
            </button>
                <h1>Settings</h1>

                <div className="theme-container">
                    <h2>Theme</h2>

                    <div className="theme active">
                        <p>Dark</p>                        
                        
                        <button className="fake-radio">
                            
                        </button>
                    </div>

                    <div className="theme">
                        <p>Light</p>
                        
                        
                        <button className="fake-radio">
                            
                        </button>
                    </div>
                    <div className="theme">
                        <p>System Settings</p>
                        
                        
                        <button className="fake-radio">
                            
                        </button>
                    </div>
                </div>

                <div className="accent-colors-container">
                    <h2>Accent Color</h2>

                    <div className="accent-colors">
                        <button className="active purple"></button>
                        <button className="active pink"></button>
                        <button className="active blue"></button>
                        <button className="active green"></button>
                        <button className="active red"></button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Settings