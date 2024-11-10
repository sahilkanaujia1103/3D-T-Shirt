import { useState } from 'react'

import './App.css'
import Canvas from './canvas'
import Home from './pages/Home'
import Customize from './pages/Customize'
import { CanvasTexture } from 'three'
import CanvasModel from './canvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app transition-all ease-in">
    <Home />
    <CanvasModel />
    <Customize />
    
  </main>
  )
}

export default App
