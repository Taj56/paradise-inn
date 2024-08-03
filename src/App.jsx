import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../components/Home"


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <main>
        <Route path="/" element={<Home />}/>
      </main>
    </Routes>
    </>
  )
}

export default App
