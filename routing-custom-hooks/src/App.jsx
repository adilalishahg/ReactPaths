import { Route, Routes, useNavigate } from "react-router-dom"
import Reciepe from "./pages/reciepe"
import Comment from "./pages/comment"
import ReciepeDetailPage from "./pages/reciepe-details"
import NotFoundPage from "./pages/not-found"
import Layout from "./components/layout"

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

      <Routes>
        <Route path="/home" element={<Layout/>}>
          <Route path="reciepe-list" element={<Reciepe />}/>
          <Route path="comments" element={<Comment />}/>        
          <Route path="reciepe-list/:id" element={<ReciepeDetailPage />}/>
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
