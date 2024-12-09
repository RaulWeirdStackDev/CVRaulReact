import { BrowserRouter } from "react-router-dom"
import { Footer, Navbar } from "./components"
import Home from "./views/Home/Home/Home"
// import Experiencia from "./views/Experiencia/Experiencia"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Home/>
    {/* <Experiencia/> */}
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
