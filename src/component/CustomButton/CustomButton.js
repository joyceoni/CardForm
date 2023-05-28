import React from "react"

import './btn.css';


const Button = ({color = "blue",name = "name" ,size="medium"}) => {
return(
 <div className="button-container">
  <button className={`custom-button ${color} ${size}`}>{name}</button>
 </div>
)
}
export default Button;