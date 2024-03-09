import { GlobalStyles } from "./GlobalStyled"
import { Outlet } from "react-router-dom"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
        <Outlet />
      <Footer />
      <SpeedInsights/>
      <Analytics/>
    </>
  )
}

export default App
