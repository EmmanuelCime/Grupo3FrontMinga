import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getChapter } from "../store/actions/chapterAction";

function Badge({ category }) {
    return (
        <span className="bg-[#FFE0DF] text-[#EF8481] text-sm font-medium px-4 py-2 rounded-full shadow-md">
            {category}
        </span>
    )
}

export default function Chapter() {
    const dispatch = useDispatch()
    const { chapters, loading, error } = useSelector((state) => state.chapterReducer)
    const [view, setView] = useState("manga")
    const { id } = useParams()
    
    useEffect(() => {
        dispatch(getChapter(id))
            .unwrap()
            .catch((err) => console.error("Error fetching chapter:", err));
    }, [dispatch, id])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    if (!chapters || chapters.length === 0) {
        return <div>Cargando capítulos...</div>
    }
    console.log(chapters);
    

    return (
        <div className="flex flex-col md:flex-row flex-wrap mx-auto p-3 pt-14 lg:px-16 sm:p-4 sm:pt-16 bg-[#EBEBEB] ">
            {/* Left Panel - Manga Image */}
            <div className="md:w-1/2 flex justify-center md:pr-3 md:mb-4 ">
                <img
                    src={chapters[0].mangaId.coverPhoto}
                    alt={chapters.title}
                    className="rounded-lg shadow-lg w-full max-h-[75vh] object-cover xl:mr-8 xl:max-h-[65vh] "
                />
            </div>

            {/* Right Panel - Details */}
            <div className="md:w-1/2 flex flex-col gap-6 md:p-2">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 mt-4 md:text-5xl ">{chapters[0].mangaId.title}</h1>
                    <div className="flex flex-wrap gap-2 mt-4 lg:py-3">
                        {//<Badge category={chapters[0].mangaId.categoryId.name} />
                        }
                    </div>
                </div>

                {/* Reaction Icons */}
                <div className="flex justify-around px-2">
                    {reactions.map((reaction) => (
                        <label key={reaction.id} className="flex items-center">
                            <input
                                type="radio"
                                name="reaction"
                                value={reaction.id}
                                checked={selectedReaction === reaction.id}
                                onChange={() => handleChange(reaction.id)}
                                className="hidden" 
                            />
                            <div
                                className={`flex items-center justify-center w-14 h-14 p-2 xl:w-18 xl:h-18 rounded-full shadow-md cursor-pointer transition-colors ${selectedReaction === reaction.id
                                        ? "bg-orange-400"
                                        : "bg-white hover:bg-gray-200"
                                    }`}
                            >
                                <img src={reaction.img} alt={reaction.alt} />
                            </div>
                        </label>
                    ))}
                </div>

                {/* Rating */}
                <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-5 sm:px-14">
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-semibold text-gray-800 lg:text-xl">4.5/5</span>
                        <span className="text-xs lg:text-md text-gray-500">Rating</span>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-semibold text-gray-800 lg:text-xl">{chapters.length}</span>
                        <span className="text-xs lg:text-md text-gray-500">Chapters</span>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-semibold text-gray-800 lg:text-xl">Eng</span>
                        <span className="text-xs lg:text-md text-gray-500">Language</span>
                    </div>
                </div>
            </div>

            <div className="md:my-2 lg:w-full xl:my-4 xl:mx-4">
                {/* View Buttons */}
                <div className="flex items-center bg-gray-300 rounded-full mb-4">
                    <button
                        onClick={() => setView("manga")}
                        className={`flex-1 px-4 py-2 sm:py-2 xl:py-3 text-center rounded-full transition-colors duration-300 ${view === "manga" ? "bg-orange-500 text-white" : "text-gray-500"
                            }`}
                    >
                        Manga
                    </button>
                    <button
                        onClick={() => setView("chapters")}
                        className={`flex-1 px-4 py-2 xl:py-3 text-center rounded-full transition-colors duration-300 ${view === "chapters" ? "bg-orange-500 text-white" : "text-gray-500"
                            }`}
                    >
                        Chapters
                    </button>
                </div>

                {/* Right Panel - Chapter List */}
                <div className="lg:w-full mb-5 sm:px-4 md:w-full">
                    {view === "chapters" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
                            {chapters.map((chapter, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-2 bg-white shadow-md rounded-lg hover:shadow-lg sm:p-3 lgw-6/12"
                                >
                                    <img
                                        src={chapter.coverPhoto}
                                        alt={chapter.title}
                                        className="w-16 h-16 sm:w-24 sm:h-24 lg:w-auto lg:h-32 rounded-lg object-cover"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-800">
                                            {chapter.title}
                                        </h2>
                                        <div className="flex items-start gap-1">
                                            <button
                                                onClick={() => openCommentsModal(chapter)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-4 sm:size-5 mt-1 text-gray-600"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                                                    />
                                                </svg>
                                            </button>

                                            <p className="text-xs sm:text-sm mt-1 text-gray-500 ">
                                                {chapter.pages.length} Pages
                                            </p>
                                        </div>
                                    </div>
                                    <NavLink to={`/details/${chapter._id}`}>
                                        <button className="px-5 py-3 sm:mx-4  bg-orange-500 text-white rounded-3xl hover:bg-orange-400">
                                            Read
                                        </button>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    )}
                    {view === "manga" && (
                        <>
                            <p className="text-gray-500 p-2 md:p-3">{chapters[0].mangaId.description}</p>
                        </>
                    )}

                </div>
            </div>
            {/* Modal Comments */}
            <div className="flex flex-col gap-4">

                {/* Modal de comentarios */}
                <ModalComments
                    isOpen={isModalOpen}
                    onClose={closeCommentsModal}
                    chapter={selectedChapter}
                    comments={comments}
                />
            </div>
        </div>
    );
}




