import { Route, Routes, useNavigate } from "react-router-dom"
import Reciepe from "./pages/reciepe"
import Comment from "./pages/comment"
import ReciepeDetailPage from "./pages/reciepe-details"
import NotFoundPage from "./pages/not-found"

function App() { 
  const navigate = useNavigate()
  return (
    <>
      <h3>React Routing Custom Hooks And More</h3>

      <button
        onClick={() => navigate("/reciepe-list")}
      >Rciepe List</button>
      <button
        onClick={() => navigate("/comments")}
      >Comments</button> 

      <Routes>
        <Route path="/reciepe-list" element={<Reciepe />}/>
        <Route path="/comments" element={<Comment />}/>
        <Route path="/reciepe-list/:id" element={<ReciepeDetailPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
