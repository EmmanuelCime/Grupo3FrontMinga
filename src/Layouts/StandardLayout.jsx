import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import SideBar from "../Components/SideBar.jsx";

function StandardLayout() {
    return (
        <>
            <header className="absolute w-full">
                <SideBar></SideBar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default StandardLayout