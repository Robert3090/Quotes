import React from "react";
import "./Button.css"


const Button = ({change, quote}) => {

    return(
        <div>
            <button className="btn" onClick={change}>Siguiente Frase</button>
        </div>
    )
}
export default Button;