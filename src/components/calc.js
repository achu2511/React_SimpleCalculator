import { useState } from "react";


export function Cals(){
    const [display,setDisplay]=useState('0')

    const handlenumber=(event)=>{
        const num=event.target.textContent;
        if(display==='0'){
            setDisplay(num)  
        }
        else{
            setDisplay(display+num)  
        }
    }

    const handleoperator=(event)=>{
        const op=event.target.textContent;
        setDisplay(display+' '+ op+' ');
    }

    const handleEqual=()=>{
        setDisplay(eval(display))
    }

    const handleClear=()=>{
        setDisplay('0');
    }

    const handleDec=()=>{
        const arr=display.split(' ');
        const last=arr[arr.length-1];

        if(!last.includes('.') && (typeof parseInt(last) ==='number')){
            setDisplay(display + '.');
        }
    }



    return (
        <>
        <div className="cals">
            <div className="calcu">
                <div id="display" className="row">{display}</div>
                <div id="clear" className="row" onClick={handleClear}>
                    AC
                </div>
                <div id="seven" onClick={handlenumber}>7</div>
                <div id="eight" onClick={handlenumber}>8</div>
                <div id="nine" onClick={handlenumber}>9</div>
                <div id="multiply" onClick={handleoperator}>*</div>
                <div id="four" onClick={handlenumber}>4</div>
                <div id="five" onClick={handlenumber}>5</div>
                <div id="six" onClick={handlenumber}>6</div>
                <div id="divide" onClick={handleoperator}>/</div>
                <div id="one"  onClick={handlenumber}>1</div>
                <div id="two" onClick={handlenumber}>2</div>
                <div id="three" onClick={handlenumber}>3</div>
                <div id="add" onClick={handleoperator}>+</div>
                <div id="zero" onClick={handlenumber}>0</div>
                <div id="decimal" onClick={handleDec}>.</div>
                <div id="equals" onClick={handleEqual}>=</div>
                <div id="subtract" onClick={handleoperator}>-</div>

            </div>

        </div>
        
        </>
    );
}