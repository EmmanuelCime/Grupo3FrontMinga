import React, { useState, useEffect } from "react"


function Carousel() {
    let slides = [
        {
            id: 1,
            title: "Shonen",
            description:
                "Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.",
            img:
                "https://ramenparados.com/wp-content/uploads/2023/04/20230424_075832.jpg",
            poster:
                "https://athenaposters.ca/wp-content/uploads/2023/04/RP23306-My-Hero-Academia-Season-6-Key-Art.png",
        },
        {
            id: 2,
            title: "Shojo",
            description:
                "Aimed at teenage girls, these manga often focus on relationships and emotional growth. They frequently explore themes of love and friendship.",
            img:
                "https://ramenparados.com/wp-content/uploads/2023/04/20230424_075832.jpg",
            poster:
                "https://athenaposters.ca/wp-content/uploads/2023/04/RP23306-My-Hero-Academia-Season-6-Key-Art.png",
        },
    ]

    let [currentIndex, setCurrentIndex] = useState(0)

    function PreviousSlide() {
        let isFirstSlide = currentIndex === 0
        let newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    function NextSlide() {
        let isLastSlide = currentIndex === slides.length - 1
        let newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            NextSlide()
        }, 20000)

        return () => clearInterval(interval)
    }, [currentIndex])

    return (
        <div className="relative max-w-72 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-3 mb-2 md:my-8 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg shadow-lg">

            <div className="flex items-center md:p-6">
                <button onClick={PreviousSlide} className="text-black md:text-2xl md:p-2 pe-1 rounded-full bg-slate-200 shadow-md hover:bg-gray-400 hover:text-white">
                    &larr;
                </button>

                <div className="flex flex-col md:flex-row items-center h-[320px] md:h-[360px] w-full">
                    <div className="flex-1">
                        <img src={slides[currentIndex].img} alt={slides[currentIndex].title} className="h-36 object-contain md:ps-2" />
                    </div>
                    <div className="flex-1 hidden sm:block">
                        <img src={slides[currentIndex].poster} alt={slides[currentIndex].title} className="h-56 object-cover mx-auto rounded-lg" />
                    </div>
                    <div className="flex-1 text-white md:ml-4 md:me-2">
                        <h2 className="text-center md:text-start text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">{slides[currentIndex].title}</h2>
                        <p className="text-center md:text-start text-sm md:text-base lg:text-lg xl:text-xl mt-1 md:mt-4">{slides[currentIndex].description}</p>
                    </div>
                </div>

                <button onClick={NextSlide} className="text-black md:text-2xl md:p-2 ps-1 rounded-full bg-slate-200 shadow-md hover:bg-gray-400 hover:text-white">
                    &rarr;
                </button>
            </div>

        </div>
    )
}


export default Carousel