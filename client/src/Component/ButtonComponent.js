import React from "react";
 
function ButtonComponent(props){
      return(
            <button onClick={props.handleClick}>{props.BtnText}</button>
       );
}
export default ButtonComponent;