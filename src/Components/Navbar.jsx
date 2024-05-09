import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ back }) {
  return (
    <nav className="nav-main astro-LTBHV4OT">
      {back ? (
        <Link to="/" class="back image astro-MSXFEFZW">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="b"
            viewBox="0 0 36 24"
            class="astro-MSXFEFZW"
          >
            <path
              fill="none"
              stroke="#f6f1d7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M34.14 12H3.96M14.69 22.85 1.86 12 14.69 1.15"
              class="astro-MSXFEFZW"
            ></path>
          </svg>
          <p style={{color:"#0F0D0E"}}>mm</p>
        </Link>
      ) : (
        <a
          href="https://www.linkedin.com/in/monurajputrko/"
          className="logo ui-logo image astro-LTBHV4OT astro-TVRURPNS"
        >
          <img
            src="https://avatars.githubusercontent.com/u/125896049?v=4"
            width="28"
            height="28"
            alt="usehoks"
            className="astro-TVRURPNS"
          />
        </a>
      )}
      <a
        href="https://github.com/monurajputrko"
        className="logo image github astro-LTBHV4OT astro-4HSJMIRU"
      >
        <img
          src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png"
          alt="GitHub"
          width="48"
          height="48"
          className="astro-4HSJMIRU"
        />
      </a>
    </nav>
  );
}
