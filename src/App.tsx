import React from 'react'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  )
}

export default App