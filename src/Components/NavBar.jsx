import { NavLink } from "react-router-dom"
import { useState } from "react"
import MingaLogotype from "../assets/mingaLogotype.png"
import MenuIcon from "../assets/menuIcon.png"


function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="flex justify-between">
                <button onClick={toggleSidebar} className="pt-4 pb-4 ps-14">
                    <img src={MenuIcon} alt="Menu icon" className="w-10 cursor-pointer" />
                </button>

                <NavLink to="/home" className="pe-14"><img src={MingaLogotype} alt="Minga Logotype" /></NavLink>
            </div>
        </>
    )
}

export default NavBar