import Footer from "./components/Footer"
import Header from "./components/Header"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SignUp from "./pages/SignUp"

function App() {
  
  return (
    <>
      <Router>
          <Header />
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />}/>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={<SignUp />} />
              </Routes>
          <Footer />
      </Router>
    </>
  )
}

export default App
