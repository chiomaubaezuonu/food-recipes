import React from 'react'
import Navbar from "./components/Navbar.jsx"

import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'
import { Route, Routes } from 'react-router-dom'
import About from './components/About.jsx'
import Tags from './components/Tags.jsx'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/tags' element={<Tags />} />
        {/* <Route path='/recipes' element={<Recipes />} /> */}

      </Routes>
      <Footer />
    </div>
  )
}

export default App