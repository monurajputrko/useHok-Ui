import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Footer from './Footer'
import './test.css'
import Search from './Search';
import { Settitle } from 'usehoks'

export default function Home() {
  Settitle("usehoks");
  return (
    <div>
      <Navbar back={false} />
      <Slider />
      <Search />
      <Footer />
    </div>
  )
}
