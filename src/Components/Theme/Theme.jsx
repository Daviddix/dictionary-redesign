import { useState } from "react"
import "./Theme.css"

function Theme({text,activeTheme,setActiveTheme}) {
    function handleClick(){
        if (text == "System Settings") {
          setActiveTheme(text)
          const systemTheme = window.matchMedia("(prefers-color-scheme : dark)").matches ? "dark" : "light"
          if (systemTheme == "dark") {
            localStorage.setItem("theme", text + " Dark")
            document.body.dataset.theme = "System Settings Dark"
          }else{
            localStorage.setItem("theme", text + " Light")
            document.body.dataset.theme = "System Settings Light"
          }
        }else{
        setActiveTheme(text)
        localStorage.setItem("theme", text)
        document.body.dataset.theme = text
        }
        
    }
  return (
    <div 
    className={activeTheme == text? "theme active" : "theme"}>
        <p>{text}</p>                        
        
        <button 
        onClick={handleClick}
        className="fake-radio">
            
        </button>
    </div>
  )
}

export default Theme