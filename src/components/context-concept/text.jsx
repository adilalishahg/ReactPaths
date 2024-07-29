import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

const ContextTextComponent = () => {
    const {theme} = useContext(GlobalContext) 
  return (
    <h1 style={{ fontSize:theme === 'light'?'50px':'20px' }}>ContextTextComponent</h1>
  )
}

export default ContextTextComponent