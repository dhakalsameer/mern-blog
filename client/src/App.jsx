import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

import React from 'react'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" elements={<Home />} />
      <Route path="/about" elements={<About />} />
      <Route path="/sign-in" elements={<Signin />} />
      <Route path="/sign-up" elements={<SignUp />} />
      <Route path="/dashboard" elements={<Dashboard />} />
      <Route path="/projects" elements={<Projects />} />


      


    </Routes>

    </BrowserRouter>
  )
}
