import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from './component/pages/Home'
// import Login from './component/Authentication/login'
import Login from './component/Authentication/Login'
import Signup from './component/Authentication/Signup'
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
