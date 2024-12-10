import { useState, useEffect } from "react";
import imageCarrrusel from "../assets/imageCarrusel.png";
import imageCarrusel2 from "../assets/imageCarrusel2.png";
import imageCarrusel3 from "../assets/imageCarrusel3.png";
import sasukeUchiha from "../assets/sasukeUchiha.png"
import imageCarruselCaratula1 from "../assets/imageCarruselCaratula1.png"
import imageCarruselCaratula2 from "../assets/imageCarruselCaratula2.png";
import imageCarruselCaratula3 from "../assets/imageCarruselCaratula3.png";
import imageCarruselCaratula4 from "../assets/imageCarruselCaratula4.png";

function Carousel() {
    const allCategories = [
        {
            charcterPhoto: imageCarrusel2,
            coverPhoto: imageCarruselCaratula2,
            description: "Shōnen is primarily aimed at young male audiences. It often focuses on action, adventure, and character development, with themes of friendship and personal growth.",
            name: "Shōnen",
        },
        {
            charcterPhoto: imageCarrrusel,
            coverPhoto: imageCarruselCaratula1,
            description: "Seinen is targeted at adult men. It often features more complex and mature plots, with themes that may include politics, society, and psychology.",
            name: "Seinen",
        },
        {
            charcterPhoto: sasukeUchiha,
            coverPhoto: imageCarruselCaratula4,
            description: "Comic books are a storytelling medium that combines visual art with text in sequential panels. They cover various genres like superheroes, fantasy, and sci-fi.",
            name: "Comics",
        },
        {
            charcterPhoto: imageCarrusel3,
            coverPhoto: imageCarruselCaratula3,
            description: "Shōjo is primarily aimed at young female audiences. The stories often focus on romance, emotions, and interpersonal relationships.",
            name: "Shōjo",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % allCategories.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [allCategories]);

    function PreviousSlide() {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? allCategories.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    function NextSlide() {
        const isLastSlide = currentIndex === allCategories.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="relative max-w-screen-sm sm:max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto mt-3 mb-2 md:my-32 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg shadow-lg px-3 lg:px-6">
            <div className="flex flex-col md:flex-row items-center h-auto md:h-[340px] p-4 md:p-6 lg:px-4 px-2">
                {/* Botón para pantalla mediana y grande */}
                <button
                    onClick={NextSlide}
                    className="md:text-2xl md:p-2 ps-1 rounded-full text-white absolute left-2 top-36"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>

                {/* Contenido principal */}
                <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-6">
                    {/* Imagen de personaje */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img
                            src={allCategories[currentIndex]?.charcterPhoto}
                            alt={allCategories[currentIndex]?.name}
                            className="w-full max-w-[200px] md:max-w-none h-40 md:h-auto object-contain lg:pb-32"
                        />
                    </div>
                    {/* Imagen de portada */}
                    <div className="hidden lg:block md:w-1/3 flex justify-center items-center px-10">
                        <img
                            src={allCategories[currentIndex]?.coverPhoto}
                            alt={`${allCategories[currentIndex]?.name} Cover`}
                            className="w-full max-w-[200px] md:max-w-none lg:max-w-[220px] lg:pb-12 h-40 md:h-auto rounded-lg object-cover"
                        />
                    </div>
                    {/* Texto descriptivo */}
                    <div className="text-center md:text-left flex flex-col justify-center md:w-1/3">
                        <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white">
                            {allCategories[currentIndex]?.name}
                        </h2>
                        <p className="text-xs sm:text-sm md:text-sm lg:text-md text-white mt-2 md:pr-2">
                            {allCategories[currentIndex]?.description}
                        </p>
                    </div>
                </div>

                {/* Botón para pantalla mediana y grande */}
                <button
                    onClick={PreviousSlide}
                    className="md:text-2xl md:p-2 ps-1 rounded-full text-white absolute right-2 top-36"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>
        </div>


    );
}

export default Carousel;
