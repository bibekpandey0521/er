import React, { useState } from 'react'

const Button = (props) => {
    // let label = "click me";
    // function changeLabel(){
    //     label = "clicked";
    //     console.log(label);
    // }
    // let label = "click me";
    const [label,setLabel]=useState("Click me");
    function changeLabel(){
        setLabel("Clicked");
    }
    return (
    <div>
        <button onClick={changeLabel}>{label}</button>
      {/* <button>{props.label}</button> */}
    </div>
  )
}

export default Button
