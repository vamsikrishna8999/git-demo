import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

function RootLayot() {
  return (
    <div>
        <Navbar />
        {/*dynamic content*/}
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayot