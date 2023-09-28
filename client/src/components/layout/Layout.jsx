import { Outlet } from "react-router-dom"

import Navbar from "../Home/Navbar"
const Layout = () => {
  return (
    <div>
    <div className={``}>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    
    </div>
  )
}

export default Layout