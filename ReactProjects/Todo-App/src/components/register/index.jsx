import React, { useState } from 'react'
import CommonForm from '../common-form'
import { registerFormElements } from '../../config'
const initialFormState = {
  name:'',
  email:'',
  password:'',
}
const Register = () => {
  const [registerFormData,setRegisterFormData] = useState(initialFormState)
  
  function onHandleSubmit(e){
    e.preventDefault()
    console.log(registerFormData)
    setRegisterFormData(initialFormState)
}
  return (
    <div>
      <h1>Register Form</h1>
      <CommonForm 
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={'Register'}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  )
}

export default Register