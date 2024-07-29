import React, { useState } from 'react'



const FormComponent = () => {
    const [nameValue,setNameValue] = useState("")
    const [emailValue,setEmailValue] = useState("")
    const [formData,setFormData] = useState({
        name:"",
        email:""
    })

    const handleInputChange = (event) => {
        const {value } = event.target
        setNameValue(value)


    }
    const handleOnChange = (event) => {
        const {value,name } = event.target
        // setNameValue(value)
        setFormData({...formData,[name]:value})

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div>
        <h1>
            Form
        </h1>
        <form onSubmit={handleSubmit}>

            <input 
                name="name" 
                value={formData.name} 
                onChange={handleOnChange} 
                id="name" 
                placeholder='Enter name'
            />
            <input 
                name="email" 
                value={formData.email} 
                onChange={handleOnChange} 
                id="email" 
                placeholder='Enter email'
            />
            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default FormComponent