import React, { useEffect, useState } from "react";
import MainSection from "./MainSection";
import { Data } from "../Assets/Data"; // Update the import statement
import { useThrottle } from "usehoks";

export default function Search() {
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState("");
  const throttledInput = useThrottle(input, 1000); // Throttle the input value
  const [data, setData] = useState(Data);

  const inputStyle = {
    color: 'white',
    border: '2px solid #FCBA28',
    borderRadius: '10px',
    padding: '15px 35px',
    background: 'transparent',
    maxWidth: '600px',
    transition: 'box-shadow 0.3s ease'
  };

  const inputActiveStyle = {
    boxShadow: '2px 2px 15px #8707ff inset'
  };

  // Update the data whenever the throttledInput changes
  useEffect(() => {
    setData(Data.filter((e) => e.title.toLowerCase().includes(throttledInput.toLowerCase())));
  }, [throttledInput]);

  return (
    <>
      <input
        placeholder="Search hoks here...."
        style={isActive ? { ...inputStyle, ...inputActiveStyle } : inputStyle}
        name="text"
        type="text"
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onMouseLeave={() => setIsActive(false)}
        onChange={(e) => setInput(e.target.value)}
      />

      <MainSection data={data} />
    </>
  );
}
