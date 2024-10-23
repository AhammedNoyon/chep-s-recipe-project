import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(5);

  const handleAdd = () => {
    const increaseCount = count + 1;
    setCount(increaseCount);
  };
  function handleRemove() {
    count <= 0 ? alert("Not decrease") : setCount(count - 1);
  }
  return (
    <div className="state-container">
      <h3>State related :</h3>
      <h3>count : {count}</h3>
      <button
        onClick={handleAdd}
        style={{ backgroundColor: "gray", margin: "10px", color: "white" }}
      >
        Increase
      </button>
      <button
        onClick={handleRemove}
        style={{ backgroundColor: "gray", margin: "10px", color: "white" }}
      >
        decrease
      </button>
    </div>
  );
}
