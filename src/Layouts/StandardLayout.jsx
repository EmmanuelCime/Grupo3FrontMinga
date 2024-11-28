import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";

function StandardLayout() {
    return (
        <>
            <header>
                <NavBar></NavBar>
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