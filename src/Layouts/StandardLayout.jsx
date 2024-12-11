import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer.jsx"
import SideBar from "../Components/SideBar.jsx"
import { ChatBot } from "../Components/ChatBot.jsx"


function StandardLayout() {
    return (
        <>
            <header className="absolute w-full">
                <SideBar></SideBar>
            </header>

            <main>
                <Outlet></Outlet>
                <ChatBot/>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}


export default StandardLayout