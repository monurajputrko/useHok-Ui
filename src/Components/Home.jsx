import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import MainSection from './MainSection'
import Footer from './Footer'
import './test.css'
import CodeDisplay from './CodeDisplay'
import Search from './Search'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Search />
      <MainSection />
      <Footer />
    </div>
  )
}
