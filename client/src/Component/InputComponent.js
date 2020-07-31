import React from "react";

function InputComponent(props){
    return(
        <input type={props.type} placeholder={props.placeholder} onChange={(event)=>{props.handleChange(event.target.value)}} value={props.value}/>
    )
}

export default InputComponent;