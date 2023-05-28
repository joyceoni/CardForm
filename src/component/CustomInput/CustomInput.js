
import React from 'react'
import "./input.css";

const CustomInput = ( {placeholder,value,setValue,secureTextEntry }) => {
  return (
    <div className ='inputCover'>
      <form  >
     <input
className='input'
    value={value}
      placeholder={placeholder } 
      onChange = {setValue}
      secureTextEntry={secureTextEntry} 
      src=' <img src="https://img.icons8.com/color/48/000000/visa.png"/>'
     />
      

    </form>
    </div>
  )
}





export default CustomInput