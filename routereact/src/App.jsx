

import { BrowserRouter, Routes,Route } from "react-router-dom"
import HomePage from "./Features/home/HomePage"
import About from "./Features/about/About"
import './App.css'
import Navbar from "./shared/components/Navbar"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<About/>} />
    </Routes>

    </BrowserRouter>
  )
  
}

export default App
