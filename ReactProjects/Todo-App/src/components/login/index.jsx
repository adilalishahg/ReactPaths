import React, { useState } from 'react'
import CommonForm from '../common-form'
import { loginFormElements } from '../../config'

const Login = () => {
    const initialFormData = {
        password:'',
        email:''
    }
    const [loginFormData,setLoginFormData] = useState(initialFormData)
   

    function onHandleSubmit(e){
        e.preventDefault()
        console.log(loginFormData)
        setLoginFormData(initialFormData)
    }
  return (
    <div>
        <h1>Login Page</h1>
        <CommonForm formData={loginFormData} setFormData={setLoginFormData} formControls={loginFormElements} buttonText={"Login"} onHandleSubmit={onHandleSubmit}/>
    </div>
  )
}

export default Login