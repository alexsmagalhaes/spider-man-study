import { GlobalStyles } from "./GlobalStyled"
import { Outlet } from "react-router-dom"

import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default App
