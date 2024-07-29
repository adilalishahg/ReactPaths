import React from 'react'

const CommonInput = ({label,onChange,type,name,id,value,placeholder}) => {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <input 
            type={type||"text"} 
            name={name} 
            id={id} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder||"Enter Value"} 
        />
    </div>
  )
}

export default CommonInput