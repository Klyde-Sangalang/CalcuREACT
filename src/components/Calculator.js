import React from 'react';
import { useState } from 'react';
import "./CalcStyle.css";


function CalculatorKey(value) {
    return (
        <button type="button"
            className={value.className}   
            
        >
            {value.keyValue}{" "}
        </button>

    )
}

 
function Calculator() {
    
    const result = 0;

    

    return (
        <div className="calculator">

        <h1>WELCOME TO MY APP</h1>

            <div className="calculator-input">
                <div className="result">{result}</div>
            </div>

            <div className="calculator-keys">
                <div className="key-function">
                    <CalculatorKey keyValue="7" />
                    <CalculatorKey keyValue="8" />
                    <CalculatorKey keyValue="9" />
                    <CalculatorKey keyValue="+" />

                    <CalculatorKey keyValue="4" />
                    <CalculatorKey keyValue="5" />
                    <CalculatorKey keyValue="6" />
                    <CalculatorKey keyValue="-" />
                      
                    <CalculatorKey keyValue="1" />
                    <CalculatorKey keyValue="2" />
                    <CalculatorKey keyValue="3" />
                    <CalculatorKey keyValue="*" />

                    <CalculatorKey keyValue="C" />
                    <CalculatorKey keyValue="0" />
                    <CalculatorKey keyValue="=" />
                    <CalculatorKey keyValue="÷" />
                    
                    
                </div>
            </div>

        </div>
    );

}

export default Calculator;
