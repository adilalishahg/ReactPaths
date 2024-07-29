import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ReciepeDetailPage = () => {
    const params = useParams();
    const location = useLocation()
    console.log(params)
    console.log(location)

    const {id} = params
  return (
    <div>Reciepe Detail of item {id}</div>
  )
}

export default ReciepeDetailPage