import React from 'react'
import CommonInput from '../common-input';

const formTypes = {
    INPUT:"input",
    TEXTAREA:"textarea",
    SELECT:"select"
}
const CommonForm = ({formControls=[],formData,setFormData,buttonText="submit",onHandleSubmit}) => {
    function renderFormElement(getCurrentFormElement){
        let content = null

        switch (getCurrentFormElement.componentType) {
            case formTypes.INPUT:
                content= <CommonInput 
                    label={getCurrentFormElement.label} 
                    name={getCurrentFormElement.name}  
                    id={getCurrentFormElement.id} 
                    type={getCurrentFormElement.type} 
                    placeholder={getCurrentFormElement.placeholder} 
                    value={formData[getCurrentFormElement.name]}
                    onChange={(event)=>setFormData({...formData,[event.target.name]:event.target.value})}
                />
                break;
            default:
                content= <CommonInput 
                    label={getCurrentFormElement.label} 
                    name={getCurrentFormElement.name}  
                    id={getCurrentFormElement.id} 
                    type={getCurrentFormElement.type} 
                    placeholder={getCurrentFormElement.placeholder} 
                    value={formData[getCurrentFormElement.name]}
                    onChange={(event)=>setFormData({...formData,[event.target.name]:event.target.value})}
                />
                break;


        }
        return content
    }
  return (
    <form onSubmit={onHandleSubmit}>
        {formControls?.length > 0 && formControls.map((singleFormElement)=>(
            renderFormElement(singleFormElement)
        ))}
        <div style={{ marginTop:"12px" }}>
            <button type="submit">{buttonText}</button>
        </div>
    </form>
  )
}

export default CommonForm