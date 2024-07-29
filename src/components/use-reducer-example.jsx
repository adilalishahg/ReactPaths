import   { useReducer } from 'react'
const initialState = {
    showTextFlag:false,
    changeTextStylesFlag:false
}
const HIDE_TEXT = 'HIDE_TEXT'
const SHOW_TEXT = 'SHOW_TEXT'
const CHANGE_TEXT_STYLE = 'CHANGE_TEXT_STYLE'
function reducer(state,action)
{
    switch (action.type) {
        case HIDE_TEXT:
            return {...state,showTextFlag:false}
        case SHOW_TEXT:
            return {...state,showTextFlag:true}
           
        case CHANGE_TEXT_STYLE:
            return {...state,changeTextStylesFlag:!state.changeTextStylesFlag} 
        default:
            break;
    }
            return state;
} 
const UseReduceExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState); 
    console.log(state)
  return (
    <>
    {state?.showTextFlag&&<h3 style={state.changeTextStylesFlag?{color:'red'}:{color:'green'}}>Use Reducer Hook Example</h3>} 
    <button onClick={()=>dispatch({type:SHOW_TEXT})}>Show Text</button>
    <button onClick={()=>dispatch({type:HIDE_TEXT})}>Hide Text</button> 
    <button onClick={()=>dispatch({type:CHANGE_TEXT_STYLE})}>Toggle Text Styles</button>
    </>
  )
}

export default UseReduceExample