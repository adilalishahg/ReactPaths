import { useEffect, useRef } from "react"

 
const Hooks = () => {

    const countValue = useRef(0)
    const divElementRef = useRef()

    function handleClick(){
        countValue.current++
        console.log(countValue.current)
    }
    useEffect(()=>{
        const getDivReference = divElementRef.current
        console.log(getDivReference)
    },[])
  return (
    <>
        <h1>useCallback,useRef,useMemoHooks</h1>
        <button onClick={handleClick}>Click Me</button>
        <div ref={divElementRef}>asd</div>
    </>
  )
}

export default Hooks