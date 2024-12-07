import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategory } from "../store/actions/categoryAction"


function Carousel() {
    const { allCategory, loading, error } = useSelector((state) => state.categoryReducer)
    const dispatch = useDispatch()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        dispatch(getCategory())
            .unwrap()
            .catch((err) => console.error("Error fetching mangas:", err))
    }, [dispatch])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                allCategory && allCategory.length > 0
                    ? (prevIndex + 1) % allCategory.length
                    : 0
            );
        }, 8000);

        return () => clearInterval(interval);
    }, [allCategory]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-orange-500 text-xl font-semibold">Loading...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500 text-xl font-semibold">Error: {error}</p>
            </div>
        )
    }

    if (!allCategory || allCategory.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500 text-xl font-semibold">No categories available</p>
            </div>
        )
    }

    function PreviousSlide() {
        let isFirstSlide = currentIndex === 0
        let newIndex = isFirstSlide ? allCategory.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    function NextSlide() {
        let isLastSlide = currentIndex === allCategory.length - 1
        let newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className="relative max-w-72 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-3 mb-2 md:my-8 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg shadow-lg">
            <div className="flex items-center md:p-6">
                <button onClick={PreviousSlide} className="text-black md:text-2xl md:p-2 pe-1 rounded-full bg-slate-200 shadow-md hover:bg-gray-400 hover:text-white">
                    &larr;
                </button>
                <div className="flex flex-col md:flex-row items-center h-[320px] md:h-[340px] w-full">
                    <div className="flex-1">
                        <img src={allCategory[currentIndex]?.charcterPhoto} alt={allCategory[currentIndex]?.name} className="h-36 xl:h-60 object-contain md:ps-2" />
                    </div>
                    <div className="flex-1 hidden sm:block">
                        <img src={allCategory[currentIndex]?.coverPhoto} alt={allCategory[currentIndex]?.name} className="h-64 lg:h-80 xl:h-96 object-cover mx-auto rounded-lg" />
                    </div>
                    <div className="flex-1 text-white md:ml-4 md:me-2">
                        <h2 className="text-center md:text-start text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                            {allCategory[currentIndex]?.name}
                        </h2>
                        <p className="text-center md:text-start text-sm md:text-base lg:text-lg xl:text-xl mt-1 md:mt-4">
                            {allCategory[currentIndex]?.description}
                        </p>
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