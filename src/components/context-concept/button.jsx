import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

const ContextButtonComponent = () => {
    const {handleChangeThemeOnButtonClick} = useContext(GlobalContext)
  return (
    <button onClick = {handleChangeThemeOnButtonClick}>button</button>
  )
}

export default ContextButtonComponent