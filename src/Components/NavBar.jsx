import { NavLink } from "react-router-dom"
import { useState } from "react"
import MingaLogotype from "../assets/mingaLogotype.png"
import MenuIcon from "../assets/menuIcon.png"

const routes = [
    { to: "/", text: "Home" },
    { to: "/mangas", text: "Mangas" },
    { to: "/manager", text: "Manager" },
    { to: "/signup", text: "Register" },
    { to: "/signin", text: "Sign In" },
]

function LinkMenu() {
    return (
        routes.map((r, index) => (
            <li key={index} className='hover:underline'>
                <NavLink to={r.to}
                    className={({ isActive }) => isActive ? "text-xl text-white font-bold" : "text-xl text-white"}>
                    {r.text}
                </NavLink>
            </li>
        ))
    )
}

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="flex justify-between items-center sticky top-0">
                <button onClick={toggleSidebar} className="pt-4 pb-4 ps-14">
                    <img src={MenuIcon} alt="Menu icon" className="w-10 cursor-pointer" />
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} pr-3`}>
                    <ul className="space-x-3 flex text-white items-center">
                        <LinkMenu routes={routes}></LinkMenu>
                    </ul>
                </div>
                <NavLink to="/home" className="pe-14"><img className="w-28" src={MingaLogotype} alt="Minga Logotype" /></NavLink>
            </div>
        </>
    )
}

export default NavBar