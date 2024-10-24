import { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";

function Calculator() {
  let [result, setResult] = useState("");
  let [hasDot, setHasDot] = useState(false);
  let operators = ["+", "-", "*", "/"];

  const clickHandler = (e) => {
    let input = e.target.innerText;
    // if(input == '.' && result.includes('.')) return
    if (input === ".") {
      if (hasDot === true) return;
      else setHasDot(true);
    }
    if (operators.includes(input)) {
      setHasDot(false);
    }
    setResult(result + input);
  };

  // const checkInput = (text) => {
  //   if (text == "÷") return "/";
  //   if (text == "×") return "*";
  //   return text
  // };

  //   const checkInput = (text)=>{
  //     return text.replace(/&#215;/g, '*').replace(/&#247;/g, '/');
  // }

  const clearBtn = () => {
    setResult("");
    setHasDot(false);
  };

  const backSpaceBtn = () => {
    if (result.endsWith(".")) setHasDot(false);
    else if (result.endsWith("+") && result.includes(".")) setHasDot(false);
    setResult(result.slice(0, -1));
  };

  const equalBtn = () => {
    // setResult(eval(result).toString())
    setResult(evaluate(result));
    if (String(evaluate(result)).includes(".")) setHasDot(true);
    else setHasDot(false);
  };

  return (
    <div className="container">
      <div className="screen">{result}</div>
      <div className="buttons">
        <button className="color twoCol" onClick={clearBtn}>
          Clear
        </button>
        <button className="color" onClick={backSpaceBtn}>
          C
        </button>
        <button className="color" onClick={clickHandler}>
          /
        </button>
        <button onClick={clickHandler}>7</button>
        <button onClick={clickHandler}>8</button>
        <button onClick={clickHandler}>9</button>
        <button className="color" onClick={clickHandler}>
          *
        </button>
        <button onClick={clickHandler}>4</button>
        <button onClick={clickHandler}>5</button>
        <button onClick={clickHandler}>6</button>
        <button className="color" onClick={clickHandler}>
          -
        </button>
        <button onClick={clickHandler}>1</button>
        <button onClick={clickHandler}>2</button>
        <button onClick={clickHandler}>3</button>
        <button className="color" onClick={clickHandler}>
          +
        </button>
        <button onClick={clickHandler}>0</button>
        <button onClick={clickHandler}>.</button>
        <button className="color twoCol" onClick={equalBtn}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
