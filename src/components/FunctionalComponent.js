import React, {useState} from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const renderCounter = () => {
    const handleClick = (e) => {
      if (e.target.innerHTML === "Plus"){
        return setCounter(counter + 1);
      }
      return setCounter(counter - 1);
    }

    return (
      <div className="container">
        <button onClick={handleClick}>Minus</button>
        <span>{ counter }</span>
        <button onClick={handleClick}>Plus</button>
      </div>
    )
  }

  return renderCounter()
}

export default Counter;
