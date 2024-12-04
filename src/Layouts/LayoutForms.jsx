import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar.jsx";

function LayoutForms() {
    return (
        <>
            <header>
                <SideBar></SideBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}

export default LayoutForms