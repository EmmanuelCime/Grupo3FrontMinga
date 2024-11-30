
const categoryColors = [
    "-red-500",
    "-blue-500",
    "-green-500",
    "-yellow-500",
    "-purple-500",
    "-pink-500",
    "-orange-500",
]

const BtnAuthCompanyTop = () => {
    return (
        <div className="flex">
            <button className="rounded-full border-2 border-solid border-black p-1 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
            </button>
            <button className="rounded-full border-2 border-solid border-black p-1 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                </svg>
            </button>
        </div>
    )
}

const BtnAuthCompanyBottom = () => {
    return (
        <div className="flex">
            <button className="rounded-2xl font-medium bg-purple-200 text-purple-500 py-1 px-3">
                Edit
            </button>
            <button className="rounded-2xl font-medium bg-red-200 text-red-500 py-1 px-3 ml-2">
                Delete
            </button>
        </div>
    )
}


export default function CardManga({ manga, index }) {
    const colorIndex = manga.category_id.charCodeAt(0) % categoryColors.length
    const categoryColor = categoryColors[colorIndex]
    return (
        <>
            <div key={index} className="w-64 h-36 lg:w-80 lg:h-44 flex items-center mt-4 rounded-2xl shadow drop-shadow-md">
                <div className={`w-2 h-24 md:h-32 bg${categoryColor}`}></div>
                <div className="h-full w-full flex flex-col justify-around items-start pl-3 py-1">
                    {manga.role == 0 && (<BtnAuthCompanyTop />)}
                    <p className="text-xl font-semibold">{manga.title}</p>
                    <p className={`font-semibold mr-5 text${categoryColor}`}>{manga.category_id.charAt(0).toUpperCase() + manga.category_id.slice(1).toLowerCase()}</p>
                    {manga.role == 0 ? (<BtnAuthCompanyBottom />) : (<button className="font-medium py-1 px-4 rounded-full bg-green-200 text-green-600">Read</button>)}
                </div>
                <img className="min-w-28 sm:min-w-32 lg:min-w-40 h-full object-cover rounded-tl-full rounded-bl-full " src={manga.cover_photo} alt={manga.title} />
            </div>
        </>
    )
}