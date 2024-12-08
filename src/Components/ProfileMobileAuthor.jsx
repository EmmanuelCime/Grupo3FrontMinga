import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAuthor } from "../store/actions/authorAction";
import avatarProfile from "../assets/avatarProfile.jpg"
import { getMangas } from "../store/actions/mangasAction";

export default function ProfileMobileAuthor({ className }) {
    const { allMangas } = useSelector((state) => state.mangaReducer);
    const { allAuthor, loading, error } = useSelector((state) => state.authorReducer);
    const dispatch = useDispatch();
console.log(allMangas);

    const [author, setAuthor] = useState({
        id: "",
        firstName: "",
        lastName: "",
        city: "",
        country: "",
        date: "",
        profileImage: avatarProfile,
    });

    useEffect(() => {
        dispatch(getAuthor())
            .unwrap()
            .catch((err) => console.error("Error fetching authors:", err))
    }, [dispatch])

    useEffect(() => {
        dispatch(getMangas())
            .unwrap()
            .catch((err) => console.error("Error fetching mangas:", err))
    }, [dispatch])

    const foundAuthor = useMemo(() => {
        if (allAuthor && allAuthor.length > 0) {
            return allAuthor.find((author) => author.userId === "67535b12fbb8780454bac7df");
        }
        return null
    }, [allAuthor])

    useEffect(() => {
        if (foundAuthor) {
            setAuthor({
                id: foundAuthor._id || "",
                firstName: foundAuthor.name || "",
                lastName: foundAuthor.lastName || "",
                city: foundAuthor.city || "",
                country: foundAuthor.country || "",
                date: foundAuthor.dateBorn || "",
                profileImage: foundAuthor.photo || avatarProfile,
            });
        }
    }, [foundAuthor]);

    const mangas = useMemo(() => allMangas.filter((manga) => manga.authorId === author.id), [allMangas, author.id]);
console.log(mangas);

    if (loading) {
        return <div>Cargando autores...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div
            className={`min-h-screen mt-7 flex flex-col ${className}`}>
            {/* Perfil */}
            <div className="flex items-center gap-4 mb-6 mt-2">
                <img
                    src={author.profileImage}
                    alt={author.firstName}
                    className="w-12 h-12 rounded-full border border-gray-300"
                />
                <div className="flex flex-col w-full">
                    <h1 className="font-bold text-md mb-">{`${author.firstName} ${author.lastName}`}</h1>
                    <p className="text-gray-600 text-xs flex mb-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                        </svg>{`${author.city}, ${author.country}`}</p>
                    <p className="text-gray-500 text-xs flex "> <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                        />
                    </svg>{author.date}</p>


                </div>
                <NavLink to="/edit/author">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </button>
                </NavLink>
            </div>

            {/* Switch New/Old */}
            <div className="flex justify-center  items-center mb-6 border-t border-gray-600 pt-3">
                <span className="text-gray-600 text-xs font-semibold">new</span>
                <label className="relative inline-block w-12 h-6 mx-3">
                    <input
                        type="checkbox"
                        className="opacity-0 w-0 h-0 peer"
                    />
                    <span className="absolute inset-0 bg-gray-300 rounded-full cursor-pointer peer-checked:bg-orange-500"></span>
                    <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-6"></span>
                </label>
                <span className="text-gray-600 text-xs font-semibold">old</span>
            </div>

            {/* Lista de Animes */}
            <div className="grid grid-cols-2 gap-4">
                {/* Tarjeta de Anime */}
                {mangas.map((manga, index) => (
                    <div key={index} className=" ">
                        <img
                            src={manga.coverPhoto}
                            alt={manga.title}
                            className="w-full h-32 object-cover rounded-lg shadow-md overflow-hidden"
                        />
                        <p className="p-2 text-sm font-semibold">{manga.title}</p>
                    </div>
                ))}
            </div>

            {/* Botón de "Manage" */}
            <div className="mt-4 text-center ">
                <NavLink to="/edit/author">
                    <button className="px-10 py-1 bg-orange-500 text-white text-xs font- rounded-full">
                        Manage!
                    </button>
                </NavLink>
            </div>
        </div>
    );
}