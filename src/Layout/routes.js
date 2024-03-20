import React from 'react'
import Home from '../components/pages/home/home'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Plans from '../components/pages/plans/plans'
import  Courses from '../components/pages/courses/courses'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import About from '../components/pages/about-us/about-us'

function Layouts() {
  return (
    <Router>

        <Header/>

      <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/learnHub-react-web'  element={<Home/>}/>
          <Route path='/services'  element={<Plans/>}/>
          <Route path='/courses'  element={< Courses/>}/>
          <Route path='/about-us'  element={<About/>}/>
        
      </Routes>
  <Footer/>
    </Router>
  )
}

export default Layouts