import React from "react";

function FunctionEventClick(){
    function clickHandler(){
        console.log('Button Clicked')
    }
    return(
        <div>
            <button onClick={clickHandler}>FunctionEventClick</button>
        </div>
    )
}

export default FunctionEventClick