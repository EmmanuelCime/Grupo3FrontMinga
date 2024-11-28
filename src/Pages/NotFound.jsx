import NotFoundImg from "../assets/404.png"

function NotFound() {

    return (
        <>
            <div className="h-screen bg-gradient-to-b from-sky-950 to-sky-800 p-5">
                <h1 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 p-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Page Not Found</h1>
                <img src={NotFoundImg} alt="404 error" className="w-1/2 mx-auto" />
            </div>
        </>
    )

}

export default NotFound