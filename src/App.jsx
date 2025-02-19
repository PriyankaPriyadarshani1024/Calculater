import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(""); // To hold current calculation
  const [history, setHistory] = useState([]); // History of calculations

  const handleNumberClick = (number) => {
    setInput(input + number); // Add number to the current input
  };

  const calculate = (operation) => {
    try {
      let result;
      if (operation === "=") {
        result = eval(input); // Evaluate the calculation
        setInput(result.toString());
        // Store the operation in the history
        setHistory([...history, `${input} = ${result}`]);
      } else {
        setInput(input + operation); // Append operator to the current input
      }
    } catch (error) {
      setInput("Error"); // Display error for invalid input
    }
  };

  const clearLastChar = () => {
    setInput(input.slice(0, -1)); // Remove the last character from the input
  };

  const clearAll = () => {
    setInput(""); // Clear the entire input
  };

  return (
    <div className="container">
      <h1> Calculator</h1>
      <div className="display">
        <h3>{input || "0"}</h3>
      </div>
      <div className="button-group">
        {/* Display numbers 1-9 */}
        <button onClick={() => handleNumberClick("1")}>1</button>
        <button onClick={() => handleNumberClick("2")}>2</button>
        <button onClick={() => handleNumberClick("3")}>3</button>
        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button onClick={() => handleNumberClick("0")}>0</button>

        {/* Additional buttons for operations */}
        <button onClick={() => calculate(".")}>.</button>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>
        <button onClick={() => calculate("=")}>=</button>
        
        {/* Clear last character button */}
        <button className="clear" onClick={clearLastChar}>C</button>

        {/* Clear all input button */}
        <button className="clear-all" onClick={clearAll}>AC</button>
      </div>
      
      <div className="history">
        <h4>History</h4>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
