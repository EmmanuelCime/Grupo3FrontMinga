import backgroundImage from "../assets/backgroundHome.png"
import Carousel from "../Components/Carousel"

function Home() {

    return (
        <>
            <div className="relative bg-cover bg-center h-screen md:h-[850px] text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="flex flex-col justify-center items-center md:items-start h-screen md:h-[800px] gap-2 md:gap-6">
                    <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold">For the love of manga</h1>
                    <p className="mt-4 md:text-3xl lg:text-4xl">Explore our varieties #MingaLove❤️</p>
                    <button className="md:text-xl lg:text-2xl w-32 lg:w-44 bg-white text-orange-500 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg mt-6">
                        Sign In!
                    </button>
                </div>
            </div>
            <Carousel></Carousel>
        </>
    )
}


export default Home