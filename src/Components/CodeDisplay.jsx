import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./code.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { Data } from "../Assets/Data";
import { Clipboard, Settitle } from "usehoks";

function CodeDisplay() {
  const [bool, setBool] = useState(false);
  const [bool1, setBool1] = useState(false);

  const { id } = useParams();

  const filteredArray = Data.filter((obj) => obj.title === id);
  Settitle(`${id} - usehoks`)
  const { copyToClipboard } = Clipboard
  ();
  const copyClick = (text) => {
    setBool(true);
    copyToClipboard(text);
    setTimeout(() => {
      setBool(false);
    }, 1000);
  };
  const copyCode = (text) => {
    setBool1(true);
    copyToClipboard(text);
    setTimeout(() => {
      setBool1(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "85%",
          }}
        >
          <h2 style={{ textAlign: "left", color: "#FCBA28" }}>
            {filteredArray[0].title}
          </h2>
          <p style={{ textAlign: "left" }}>{filteredArray[0].description}</p>

          <h2 style={{ textAlign: "left" }} class="astro-IQQ5RAKT">
            Install
          </h2>
          <div class="install astro-IQQ5RAKT astro-RYJLWM3K">
            <code class="astro-IQQ5RAKT astro-RYJLWM3K">npm i usehoks</code>
            <button
              onClick={() => copyClick("npm i usehoks")}
              class="copy-btn astro-IQQ5RAKT astro-RYJLWM3K"
            >
              {bool ? "Copied!" : "Copy"}
            </button>
          </div>

          <h2 style={{ textAlign: "left" }}>DESCRIPTION</h2>
          <p style={{ textAlign: "left" }}>
            {filteredArray[0].mainDescription}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "85%",
          }}
          class="reference"
        >
          <h2 style={{ textAlign: "left" }} id="parameters">
            Parameters
          </h2>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {filteredArray[0].input.map((e) => {
                  return (
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.type}</td>
                      <td>{e.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* <h3 id="return-values">Return Values</h3> */}
          <h2 style={{ textAlign: "left" }} id="parameters">
            Return Values
          </h2>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {filteredArray[0].output.map((e) => {
                  return (
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.type}</td>
                      <td>{e.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "85%",
          }}
          class="install astro-IQQ5RAKT astro-RYJLWM3K"
        >
          <h2 style={{ textAlign: "left" }}>Demo Code</h2>
          <button
            onClick={() => copyCode(filteredArray[0].demoCode)}
            class="copy-btn astro-IQQ5RAKT astro-RYJLWM3K"
          >
            {bool1 ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            customStyle={{ padding: "25px" }}
          >
            {filteredArray[0].demoCode}
          </SyntaxHighlighter>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CodeDisplay;
