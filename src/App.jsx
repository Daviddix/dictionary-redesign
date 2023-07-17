import { Route, Routes } from 'react-router-dom'
import {useLayoutEffect} from "react"
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ResultsPage from './pages/ResultsPage/ResultsPage'

function App() {
  useLayoutEffect(()=>{
    const hueFromLocalStorage = localStorage.getItem("accent-hue")

    document.documentElement.style.setProperty('--hue', hueFromLocalStorage || 260)

    document.body.dataset.theme = localStorage.getItem("theme") || "Light"
  }, [])

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/result/:wordToSearchFor' element={<ResultsPage />} />
    </Routes>
   
  )
}

export default App
