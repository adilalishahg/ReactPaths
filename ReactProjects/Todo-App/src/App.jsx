import { useEffect, useState } from "react"
import classes from "./styles.module.css"
import TodoItem from "./components/todo-item"
import TodoDetails from "./components/todo-details"
import { Skeleton } from "@mui/material"
 

function App() {
  const [loading,setLoading] = useState(false)
  const [openDialog,setOpenDialog] = useState(false)
  const [errorMsg,setErrorMsg] = useState(null)
  const [todoDetials,setTodoDetials] = useState(null)
  const [todoList,setTodoList] = useState([]) 
  async function fetchListOfTodos(){
    try {
      setLoading(true)
      const apiResponse = await fetch("https://dummyjson.com/todos")
      const result = await apiResponse.json()
      if(result?.todos && result?.todos.length > 0){
        setTodoList(result.todos)
        
      } else {
        setErrorMsg("No Todo List Found")
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setErrorMsg("someError Occured")
    }
  }
  useEffect(() => {
    fetchListOfTodos()
  
    
  }, [])

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
    console.log(getCurrentTodoId)
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`)
      const result = await apiResponse.json()
      if(result){
        setTodoDetials(result)
        setOpenDialog(true)
      }else{
        setTodoDetials("")
        setOpenDialog(false)

      }
    } catch (error) {
      setErrorMsg(error)
    }
  }
  if(loading){
    return <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
  }
  
  return (
    <div className={classes.mainWrapper}>
        <h1 className={classes.headerTitle}>Simple Todo App Using Material UI</h1>
        <div className={classes.todoListWrapper}>
          {
            todoList && todoList.length>0?
            todoList.map((todoItem,index)=><TodoItem key={index} todoItem={todoItem} fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}/>):""
          }
        </div>
        <TodoDetails
          openDialog={openDialog}
          todoDetails={todoDetials}
          setOpenDialog = {setOpenDialog}
          setTodoDetials = {setTodoDetials}
        
        />
    </div>
  )
}

export default App
