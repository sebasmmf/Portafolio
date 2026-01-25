import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../sections/Header/Header"
import ToggleMenu from "../components/toggleMenu/toggleMenu"
import { ToastContainer } from 'react-toastify';


export default function AppLayout() {

    const [menu, setMenu] = useState(false)

    return (
        <>
            <Header
                setMenu={setMenu}
            />
            <Outlet />
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
