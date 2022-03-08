import React, { useState } from "react";

const Exercise1 = () => {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1> Exercise 1</h1>
      <div style={{ margin: "10px" }}>
        {number}
        <button style={{ margin: "10px" }} onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default Exercise1;
