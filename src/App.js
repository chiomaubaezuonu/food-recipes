import React from 'react'
import Navbar from "./components/Navbar.jsx"
import Hero from './Hero.jsx'
import Menu from './Menu.jsx'
import Footer from './components/Footer.jsx'
import JollofRice from './foodRecipes/JollofRice.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <JollofRice />
      <Footer />
    </div>
  )
}

export default App