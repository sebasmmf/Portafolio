import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../sections/Header/Header"
import Footer from "../sections/Footer/Footer"
import ToggleMenu from "../components/ToggleMenu/ToggleMenu";
import { ToastContainer } from 'react-toastify';


export default function AppLayout() {

    const [menu, setMenu] = useState(false)

    return (
        <>
            <Header
                setMenu={setMenu}
            />
            <Outlet />
            <Footer />

            <ToggleMenu 
                menu={menu}
                setMenu={setMenu}
            />

            <ToastContainer 
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}
