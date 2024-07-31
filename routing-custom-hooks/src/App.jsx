import { Route, Routes, useNavigate, useRoutes } from "react-router-dom"
import Reciepe from "./pages/reciepe"
import Comment from "./pages/comment"
import ReciepeDetailPage from "./pages/reciepe-details"
import NotFoundPage from "./pages/not-found"
import Layout from "./components/layout"
import ReactHookForm from "./pages/reactHookForm"
import Hooks from "./pages/hooks"

function RoutesNew(){
  const element = useRoutes([
    {
      path:"/home",
      element: <Layout/>,
      children: [
        {
          path: "reciepe-list",
          element: <Reciepe/>
        },
        {
          path: "comments",
          element: <Comment/>
        },
        {
          path: "reciepe-list/:id",
          element: <ReciepeDetailPage/>
        },
        {
          path: "react-hook-form",
          element: <ReactHookForm/>
        },
        {
          path: "hooks",
          element: <Hooks/>
        },
        {
          path: "*",
          element: <NotFoundPage/>
        }
      ]
    }    
  ])
  return element
}

function App() { 
  const navigate = useNavigate()
  return (
    <>
      <h3>React Routing Custom Hooks And More</h3>

      <button
        onClick={() => navigate("/home/reciepe-list")}
      >Rciepe List</button>
      <button
        onClick={() => navigate("/home/comments")}
      >Comments</button>
      <button
        onClick={() => navigate("/home/react-hook-form")}
      >react-hook-form</button> 
      <button
        onClick={() => navigate("/home/hooks")}
      >hooks</button> 

      {/* <Routes>
        <Route path="/home" element={<Layout/>}>
          <Route path="reciepe-list" element={<Reciepe />}/>
          <Route path="comments" element={<Comment />}/>        
          <Route path="reciepe-list/:id" element={<ReciepeDetailPage />}/>
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes> */}
      <RoutesNew/>

    </>
  )
}

export default App
