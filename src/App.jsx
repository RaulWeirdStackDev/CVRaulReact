import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar } from "./components"
import Home from "./views/Home/Home/Home"
import Experiencia from "./views/Experiencia/Experiencia"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/experiencia" element={<Experiencia/>}/>
 </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
