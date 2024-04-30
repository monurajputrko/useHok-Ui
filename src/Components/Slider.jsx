import React, { useState } from "react";
import logo from "./use.png";
import { Clipboard } from "usehoks/Hookes/Module3";
import { Data } from "../Assets/Data";
import { Link } from "react-router-dom";
export default function Slider() {
  const { copyToClipboard, copied } = Clipboard(1000);
  const copyClick = () => {
    copyToClipboard("npm i usehoks");
  };

  return (
    <header className="hero astro-IQQ5RAKT">
      <img
        src={logo}
        width="546"
        height="80"
        alt="useHooks"
        className="astro-IQQ5RAKT"
      />
      <h1 className="astro-IQQ5RAKT">
        A collection of modern, server-safe React hooks{" "}
      </h1>
      <div className="install astro-IQQ5RAKT astro-RYJLWM3K">
        <code className="astro-IQQ5RAKT astro-RYJLWM3K">npm i usehoks</code>
        <button
          onClick={copyClick}
          className="copy-btn astro-IQQ5RAKT astro-RYJLWM3K"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="marquee marquee-left astro-IQQ5RAKT">
        <ul className="marquee-content astro-IQQ5RAKT">
          {Data.map((e) => {
            return (
              <li className="astro-IQQ5RAKT">
                <Link to={`/${e.title}`}  className="astro-IQQ5RAKT">
                  {e.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="marquee marquee-right astro-IQQ5RAKT">
        <ul className="marquee-content astro-IQQ5RAKT">
          {Data.map((e) => {
            return (
              <li className="astro-IQQ5RAKT">
                <Link to={`/${e.title}`}  className="astro-IQQ5RAKT">
                  {e.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

