import { Link, useLocation } from "react-router-dom"

const BtnAuthCompanyTop = ({id}) => {
    return (
        <div className="flex">
            <button className="rounded-full border-2 border-solid border-black p-1 ml-2">
                <Link to={`/newChapter/${id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                </Link>
            </button>
            <button className="rounded-full border-2 border-solid border-black p-1 ml-2">
                <Link to={`/editManga/${id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                    </svg>
                </Link>
            </button>
        </div>
    )
}

const BtnAuthCompanyBottom = () => {
    return (
        <div className="flex">
            <button className="rounded-2xl font-medium bg-purple-200 text-purple-500 py-1 px-3">
                <Link to={"/editManga"}>
                    Edit
                </Link>
            </button>
            <button className="rounded-2xl font-medium bg-red-200 text-red-500 py-1 px-3 ml-2">
                <Link to={"/deleteManga"}>
                    Delete
                </Link>
            </button>
        </div>
    )
}


export default function CardManga({ manga, index }) {
    const location = useLocation()

    const isEditPage = location.pathname === "/manager"

    return (
        <>
            <div key={index} className="w-64 h-36 lg:w-96 lg:h-48 flex lg:m-3 items-center mt-4 rounded-2xl shadow-md">
                <div className="min-w-1 h-24 md:h-28" style={{
                    backgroundColor: manga.categoryId.hover,
                }}></div>
                <div className="h-full w-full flex flex-col justify-around items-start pl-3 py-1">
                    {isEditPage && manga.role !== 0 ? (<BtnAuthCompanyTop id={manga._id} />):("")}
                    <p className="text-xl font-semibold">{manga.title}</p>
                    <p className="font-semibold mr-5" style={{
                        color: manga.categoryId.hover,

                    }}>{manga.categoryId.name}</p>
                    {isEditPage && manga.role !== 0 ? (<BtnAuthCompanyBottom />) : (<Link to={`/chapter/${manga._id}`} className="font-medium py-1 px-4 rounded-full bg-green-200 text-green-600">Read</Link>)}
                </div>
                <img className="min-w-28 sm:min-w-32 lg:min-w-40 h-full object-cover rounded-tl-full rounded-bl-full " src={manga.coverPhoto} alt={manga.title} />
            </div>
        </>
    )
}