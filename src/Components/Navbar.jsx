import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav-main astro-LTBHV4OT">
       <a href="https://www.linkedin.com/in/monurajputrko/" className="logo ui-logo image astro-LTBHV4OT astro-TVRURPNS">
        <img src="https://avatars.githubusercontent.com/u/125896049?v=4" width="28" height="28" alt="usehoks" className="astro-TVRURPNS" />
      </a>
      <Link to="/" className="logo ui-logo image astro-LTBHV4OT astro-TVRURPNS">
        <img src="https://img.icons8.com/sf-black-filled/64/FFFFFF/home.png" width="28" height="28" alt="usehoks" className="astro-TVRURPNS" />
      </Link>
      <a href="https://github.com/monurajputrko" className="logo image github astro-LTBHV4OT astro-4HSJMIRU">
        <img src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="GitHub" width="48" height="48" className="astro-4HSJMIRU" />
      </a>
    </nav>
  )
}
