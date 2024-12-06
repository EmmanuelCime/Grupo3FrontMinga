import { NavLink } from "react-router-dom";

export default function ProfileMobileCompany({ className }) {
    const companyProfile = {
        name: "Toei Animation",
        webSite: "www.toeianimation.com",
        description: "Toel Animation is a japanese company studio owned by Toei Company, Limited...",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        city: "Gynza",
        country: "Japon",
        active: true,
        userId: "",
    };

    return (
        <div className={`min-h-screen mt-7 flex flex-col ${className}`}>
            {/* Perfil */}
            <div className="flex items-center gap-4 mb-6 mt-2">
                <img
                    src={companyProfile.photo}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full border border-gray-300"
                />
                <div className="flex flex-col w-full">
                    <h1 className="font-bold text-md mb-1">{companyProfile.name}</h1>
                    <p className="text-gray-500 text-xs flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                            />
                        </svg>
                        {companyProfile.webSite}
                    </p>
                </div>
                <NavLink to="/edit/company">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                        </svg>
                    </button>
                </NavLink>
            </div>

            <p className="text-gray-500 text-xs text-center">{companyProfile.description || "No hay descripción disponible."}</p>

            {/* Switch New/Old */}
            <div className="flex justify-center items-center mb-6 border-t border-gray-600 pt-3">
                <span className="text-gray-600 text-xs font-semibold">new</span>
                <label className="relative inline-block w-12 h-6 mx-3">
                    <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
                    <span className="absolute inset-0 bg-gray-300 rounded-full cursor-pointer peer-checked:bg-orange-500"></span>
                    <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-6"></span>
                </label>
                <span className="text-gray-600 text-xs font-semibold">old</span>
            </div>

            {/* Lista de Animes */}
            <div className="grid grid-cols-2 gap-4">
                {[
                    { title: "Komi san Cant Communicate", img: "https://via.placeholder.com/120" },
                    { title: "Boruto", img: "https://via.placeholder.com/120" },
                    { title: "Evangelion", img: "https://via.placeholder.com/120" },
                    { title: "Kaguya-sama: Love is war", img: "https://via.placeholder.com/120" },
                ].map((anime, index) => (
                    <div key={index} className=" ">
                        <img
                            src={anime.img}
                            alt={anime.title}
                            className="w-full h-32 object-cover rounded-lg shadow-md overflow-hidden"
                        />
                        <p className="p-2 text-sm font-semibold">{anime.title}</p>
                    </div>
                ))}
            </div>

            {/* Botón de "Manage" */}
            <div className="mt-4 text-center ">
                <NavLink to="/edit/company">
                    <button className="px-10 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                        Manage!
                    </button>
                </NavLink>
            </div>
        </div>
    );
}
