import React from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Reciepe = () => {
  const location = useLocation()

  const {data,loading,error} = useFetch('https://dummyjson.com/recipes')

 
 if(loading) return <h1>Fetching Reciepes , Please Wait</h1>
  return (
    <div><h1>Reciepe List Page</h1>
      <ul>
        {data?.recipes?.length>0?
        data.recipes.map((reciepe,index)=>(
          <div key={index}>
              <img src={reciepe?.image}/>
              <label>{reciepe?.name}</label>
          </div>

        ))
        :null}
      </ul>

    </div>
  )
}

export default Reciepe