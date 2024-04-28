import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard } from "usehoks/Hookes/Module3";
import "./code.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function CodeDisplay() {
  const [bool, setBool] = useState(false);
  const [bool1, setBool1] = useState(false);
  const codeSnippet = `<section class="_hooks-grid_1fp8c_1">
   
  <ul class="_hooks-list_1fp8c_12">
   
    {data.map((e)=>(<li class="_hook_1wx7b_1">
      <a href="/usedebounce">
        <h3 class="_card-title_1wx7b_16">useDebounce</h3>
        <p class="_card-description_1wx7b_24">Delay the execution of function or state update with useDebounce.</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
          <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
        </svg>
      </a>
    </li>))}
    </ul>
    <`;

  const { copyToClipboard } = Clipboard();
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
      <h2 style={{ textAlign: "left", color: "#FCBA28" }}>usePrevious</h2>
      <p style={{ textAlign: "left" }}>
        Delay the execution of function or state update with useDebounce.
      </p>

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
        The useDebounce hook is useful for delaying the execution of functions
        or state updates until a specified time period has passed without any
        further changes to the input value. This is especially useful in
        scenarios such as handling user input or triggering network requests,
        where it effectively reduces unnecessary computations and ensures that
        resource-intensive operations are only performed after a pause in the
        input activity.
      </p>

      <div class="reference">
        <h2 style={{ textAlign: "left" }} id="parameters">Parameters</h2>
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
              <tr>
                <td>value</td>
                <td>any</td>
                <td>
                  The value that you want to debounce. This can be of any type.
                </td>
              </tr>
              <tr>
                <td>delay</td>
                <td>number</td>
                <td>
                  The delay time in milliseconds. After this amount of time, the
                  latest value is used.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 id="return-values">Return Values</h3>
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
              <tr>
                <td>debouncedValue</td>
                <td>any</td>
                <td>
                  The debounced value. After the delay time has passed without
                  the <code>value</code> changing, this will be updated to the
                  latest <code>value</code>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br />
      <div>
        <div class="install astro-IQQ5RAKT astro-RYJLWM3K">
          <p>Demo Code</p>
          <button
            onClick={() => copyCode(codeSnippet)}
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
            style={darcula}
            customStyle={{ padding: "25px" }}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CodeDisplay;
