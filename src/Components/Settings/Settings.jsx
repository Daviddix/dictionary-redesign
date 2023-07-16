import x from "../../../assets/icons/x-circle.svg"
import ColorCircle from "../ColorCircle/ColorCircle"
import "./Settings.css"
import {useState} from "react"

function Settings({toggleSettingsModal, activeAccentColor, setActiveAccentColor}) {

    const accentColors = [{color: "purple", hue: 260}, {color: "pink", hue:297},{color: "blue", hue: 209},{color: "green", hue:151},{color: "red", hue:0}]


    const mappedAccentColors = accentColors.map(({color, hue})=>{
        return <ColorCircle 
        activeAccentColor={activeAccentColor}
        setActiveAccentColor={setActiveAccentColor}
        color={color}
        hue={hue}
        key={color} />
    })
  return (
    <div 
    onClick={toggleSettingsModal}
    className="settings-overlay">

        <div 
        onClick={(e)=>{
            e.stopPropagation()
        }}
        className="settings-modal">
            <button
            onClick={toggleSettingsModal}
            >
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
                        {mappedAccentColors}
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Settings