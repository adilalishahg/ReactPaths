import React from 'react'
import useFetch from '../../hooks/useFetch'
import useSWR from 'swr'
import useWindowResize from '../../hooks/useWindowResize'

const Comment = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const {data,loading,error} = useFetch('https://dummyjson.com/comments')

  const { data, error, loading } = useSWR('https://dummyjson.com/comments', fetcher)

  const {windowSize} = useWindowResize()
  // console.log(windowSize)
 if(loading) return <h1>Fetching Commetns , Please Wait</h1>
  return (
    <div>
      <h3 style={{ color:windowSize.width<800 ? "red":"" }}>Current Windo width is {windowSize.width} and current height is {windowSize.height}</h3>
      <ul>{data?.comments?.length>0&&data.comments.map((comment,item)=>(
        
        <div key={item}>
          <label>{comment?.body}</label>
          <p>{comment?.likes}</p>
        </div>
        
        ))}</ul>
    </div>
  )
}

export default Comment