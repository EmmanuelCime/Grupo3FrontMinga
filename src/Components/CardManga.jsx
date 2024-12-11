import { Link, useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import LogInIMG from "../assets/logIn.png"
import { useDispatch, useSelector } from "react-redux";

const BtnAuthCompanyTop = ({ id }) => {
    return (
        <div className="flex absolute top-1 left-1">
            <button className="p-1 ml-2">
                <Link to={`/newChapter/${id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 border border-solid rounded-full border-black ">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                </Link>
            </button>
            <button className="p-1">
                <Link to={`/editManga/${id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 border border-solid rounded-full border-black">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                    </svg>
                </Link>
            </button>
        </div>
    )
}

const BtnAuthCompanyBottom = ({ id }) => {
    return (

        <div className="flex absolute bottom-2 left-3">
            <button className="rounded-2xl text-xs md:text-sm md:px-4 md:py-2 bg-purple-200 text-purple-500 px-3 py-1">
                <Link to={`/editManga/${id}`}>
                    Edit
                </Link>
            </button>
            <button className="rounded-2xl text-xs md:text-sm bg-red-200 text-red-500  px-3 ml-2">
                <Link to={"/deleteManga"}>
                    Delete
                </Link>
            </button>
        </div>
    )
}


export default function CardManga({ manga, index }) {
    const { role } = useSelector((state) => state.authReducer)
    const location = useLocation()
    const navigate = useNavigate()

    const isEditPage = location.pathname === "/manager"
    const handlerButtonRead = (manga)=>{
        if (role) {
            navigate(`/chapter/${manga._id}`)
        }else{
            Swal.fire({
                title: "Log In First to Enjoy Our World of Mangas!",
                text: "Access all features by logging in.",
                imageUrl: LogInIMG,
                imageWidth: 400,
                imageHeight: 180,
                imageAlt: "Custom image",
                showCancelButton: true,
                confirmButtonText: "Log In",
                cancelButtonText: "Cancel",
                background: "#f7f5f2",
                color: "#3d3d3d",
                confirmButtonColor: "#ff6f61",
                cancelButtonColor: "#b0bec5",
                customClass: {
                    title: "swal2-title-custom",
                    htmlContainer: "swal2-text-custom",
                    confirmButton: "swal2-confirm-button-custom",
                    cancelButton: "swal2-cancel-button-custom",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/signin", { state: { manga:manga._id } }) 
                }
            })
        }
    }


    return (
        <>
            <div
                key={index}
                className="w-64 h-36 md:w-80 md:h-44 lg:w-96 lg:h-48 flex justify-between sm:m-3 items-center mt-4 mb-1 rounded-2xl shadow-md overflow-hidden relative"
            >
                <div
                    className="min-w-1 h-24 md:h-28 text-xs"
                    style={{
                        backgroundColor: manga.categoryId.hover,
                    }}
                ></div>
                <div>
                    <div className="h-full min-w-40 lg:min-w-52 flex flex-col justify-center space-y-1 lg:space-y-1 items-start pl-3">
                        {isEditPage && manga.role !== 0 ? <BtnAuthCompanyTop id={manga._id} /> : ""}
                        <p className="text-xs md:text-lg font-bold">{manga.title}</p>
                        <p
                            className="text-xs md:text-md font-semibold"
                            style={{
                                color: manga.categoryId.hover,
                            }}
                        >
                            {manga.categoryId.name}
                        </p>
                    </div>

                    {isEditPage && manga.role !== 0 ? (
                        <BtnAuthCompanyBottom id={manga._id} />
                    ) : (
                        
                        <button
                            onClick={()=>handlerButtonRead(manga)}
                            className="text-xs py-1.5 px-4 rounded-full bg-green-200 text-green-600 md:text-sm absolute bottom-3   left-3"
                        >
                            Read
                        </button>
                    )}
                </div>
                <img
                    className="max-w-28 sm:min-w-32 lg:min-w-40 h-full object-cover rounded-tl-full rounded-bl-full"
                    src={manga.coverPhoto}
                    alt={manga.title}
                />
            </div>

        </>
    )
}