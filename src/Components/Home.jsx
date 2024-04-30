import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Footer from './Footer'
import './test.css'
import Search from './Search';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Search />
      <Footer />
    </div>
  )
}
