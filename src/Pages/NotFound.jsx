import { NavLink } from "react-router-dom"


function NotFound() {

    return (
        <>
            <div className="flex flex-col justify-evenly items-center h-screen bg-gradient-to-b from-orange-200 to-yellow-600 p-5 gap-10">
                <h1 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 to-zinc-500 xl:p-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:mt-10 lg:mb-2">Page Not Found</h1>
                <img src="https://sm.ign.com/t/ign_latam/screenshot/default/yamcha-muerto_mmxc.1200.jpg" alt="404 error" className="lg:w-3/4 rounded-full xl:mt-12"/>
                <NavLink to="/home" className="md:text-xl lg:text-2xl w-32 lg:w-52 text-center bg-white text-orange-500 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg mt-6 font-semibold">Back to Home</NavLink>
            </div>
        </>
    )
}


export default NotFound