import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";

function LayoutForms() {
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}

export default LayoutForms