import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../sections/Header/Header"
import ToggleMenu from "../components/toggleMenu/toggleMenu"

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
        </>
    )
}
