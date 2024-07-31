 import {useForm} from "react-hook-form"
const ReactHookForm = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm()

    function onSubmitForm(formData){
        console.log(formData)

        reset()
    }
  return (
    <div>
        <h1>React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div>
                <label>
                    email
                </label>
                <input {...register('email',{required:true})} name="email" type="email" />
                {errors.email &&errors.email.type==="required" && <span style={{ color:"red",fontWeight:"bolder",margin:"20px" }}>This field is required</span>}
            </div>
            <div>
                <label>
                    password
                </label>
                <input {...register('password',{required:true,minLength:8})} name="password" type="password" />
                {errors.password && errors.password.type==="required" && <span style={{ color:"red",fontWeight:"bolder",margin:"20px" }}>This field is required</span>}
                {errors.password && errors.password.type=="minLength" && <span style={{ color:"red",fontWeight:"bolder",margin:"20px" }}>Password Should be 8 character</span>}

            </div>
            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default ReactHookForm