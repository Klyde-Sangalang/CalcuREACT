import React, { useState } from 'react';
import './CalcStyle.css';

function CalculatorKey({ keyValue, onClick, buttonClassName = "CalcButton" }) {
  return (
    <button type="button" onClick={() => onClick(keyValue)} className={buttonClassName}>
      {keyValue}
    </button>
  );
}

function Calculator() {
  const [disp, setDisp] = useState('0');
  const [num1, setNum1] = useState(null);
  const [oper, setOper] = useState(null);
  const [num2, setNum2] = useState(null);
  const [isLargeText, setIsLargeText] = useState(false);

  const numberClickHandler = (value) => {
    setIsLargeText(false);
    if (oper === null) {
      if (num1 !== null) {
        value = num1 + value;
      }
      setNum1(value);
      setDisp(value);
    } else {
      if (num2 !== null) {
        value = num2 + value;
      }
      setNum2(value);
      setDisp(value);
    }
  };

  const operatorClickHandler = (value) => {
    setIsLargeText(false);
    setOper(value);
    setDisp(value);
  };

  const equalClickHandler = () => {
    setIsLargeText(false);
    if (num1 !== null && num2 !== null) {
      switch (oper) {
        case '+':
          setDisp(String(parseFloat(num1) + parseFloat(num2)));
          break;
        case '-':
          setDisp(String(parseFloat(num1) - parseFloat(num2)));
          break;
        case '*':
          setDisp(String(parseFloat(num1) * parseFloat(num2)));
          break;
        case '/':
          if (num2 === '0') {
            setDisp('ERROR');
          } else {
            setDisp(String(parseFloat(num1) / parseFloat(num2)));
          }
          break;
        default:
          setDisp('ERROR');
      }
    }
    setNum1(null);
    setOper(null);
    setNum2(null);
  };

  const clearClickHandler = () => {
    setIsLargeText(false);
    setDisp('0');
    setNum1(null);
    setOper(null);
    setNum2(null);
  };

  const nameClickHandler = (e) => {
    setIsLargeText(true)
    setDisp("KLYDE VINCENT SANGALANG");
    setNum1(null);
    setOper(null);
    setNum2(null);
  };



  return (
    <div className="calculator">
      <h1>KLYDE VINCENT SANGALANG  BSCPE 3A</h1>

      <div className="calculator-input">
        <div className={isLargeText ? "result2" : "result1"}>{disp}</div>
      </div>

      <div className="calculator-keys">
        <div className="key-function">
          <CalculatorKey keyValue="7" onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue="8" onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue="9" onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue="+" onClick={() => operatorClickHandler('+')} buttonClassName={"CalcButtonNum"}/>

          <CalculatorKey keyValue="4" onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue="5" onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue="6" onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue="-" onClick={() => operatorClickHandler('-')} buttonClassName={"CalcButtonNum"}/>

          <CalculatorKey keyValue="1" onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue="2" onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue="3" onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue="*" onClick={() => operatorClickHandler('*')} buttonClassName={"CalcButtonNum"}/>

          <CalculatorKey keyValue="C" onClick={clearClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue="0" onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue="=" onClick={equalClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue="/" onClick={() => operatorClickHandler('/')} buttonClassName={"CalcButtonNum"}/>
          <CalculatorKey keyValue={"SANGALANG"} onClick={nameClickHandler} buttonClassName={"CalcButtonName"}/>

        </div>
      </div>
    </div>
  );
}

export default Calculator;
