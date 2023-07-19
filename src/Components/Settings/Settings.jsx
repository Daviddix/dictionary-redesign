import ColorCircle from "../ColorCircle/ColorCircle"
import Theme from "../Theme/Theme"
import "./Settings.css" 
import {useEffect, useState} from "react"

function Settings({toggleSettingsModal, activeAccentColor, setActiveAccentColor, activeTheme, setActiveTheme}) {
   

    useEffect(()=>{
        if (activeTheme == "System Settings Dark" || activeTheme == "System Settings Light") {
            setActiveTheme("System Settings")
        }

    }, [])

    const accentColors = 
    [
    {color: "purple", hue: 260}, 
    {color: "pink", hue:297},
    {color: "blue", hue: 209},
    {color: "green", hue:151},
    {color: "red", hue:0}
    ]

    const themes = [
        {text: "Dark", active: false},
         {text: "Light", active:false},
          {text:"System Settings", active:true}
    ]


    const mappedAccentColors = accentColors.map(({color, hue})=>{
        return <ColorCircle 
        activeAccentColor={activeAccentColor}
        setActiveAccentColor={setActiveAccentColor}
        color={color}
        hue={hue}
        key={color} />
    })

    const mappedThemes = themes.map(({text, active})=>{
        return <Theme 
        active={active}
        key={text}
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        text={text} />
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
                <svg 
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
            </button>
                <h1>Settings</h1>

                <div className="theme-container">
                    <h2>Theme</h2>

                    {mappedThemes}
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