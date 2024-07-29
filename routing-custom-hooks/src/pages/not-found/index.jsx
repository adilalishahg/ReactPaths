import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        <h3>This page doesn't exit</h3>
        <Link to={"/reciepe-list"}>Go To Reciepe List</Link>
    </div>
  )
}

export default NotFoundPage