import { Route, Routes } from 'react-router-dom'
import {useEffect, useLayoutEffect, useState} from "react"
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ResultsPage from './pages/ResultsPage/ResultsPage'

function App() {
  const [recentWords, setRecentWords] = useState(JSON.parse(localStorage.getItem("recent-words-from-dictionary")) || [])

  useLayoutEffect(()=>{
    const hueFromLocalStorage = localStorage.getItem("accent-hue")

    document.documentElement.style.setProperty('--hue', hueFromLocalStorage || 260)

    document.body.dataset.theme = localStorage.getItem("theme") || "Light"
  }, [])

  useEffect(()=>{
    localStorage.setItem("recent-words-from-dictionary", JSON.stringify(recentWords))
  },[recentWords])



  return (
    <Routes>
      <Route path='/' element={<HomePage setRecentWords={setRecentWords} recentWords={recentWords} />} />
      <Route path='/result/:wordToSearchFor' element={<ResultsPage recentWords={recentWords} setRecentWords={setRecentWords} />} />
    </Routes>
   
  )
}

export default App
