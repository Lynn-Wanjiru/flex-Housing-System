import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" exact element={(<Home />)} />
            <Route path="/Services" element={(<Services />)} />
            <Route path="/About" element={(<About/>)} />
            <Route path="/Contact" element={(<Footer />)} />
         </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App