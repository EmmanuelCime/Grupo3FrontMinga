import favorites from "../assets/favorites.jpg";
import avatarProfile from "../assets/avatarProfile.jpg";
// import { useMemo } from "react";


export default function Favorites() {

  // logica para cuando funcione los roles 
  
  // const dispatch = useDispatch();
  // const { favorites, loading, error } = useSelector((state) => state.favorites);

  // useEffect(() => {
  //     if (authorId || companyId) {
  //         dispatch(fetchFavorites({ authorId, companyId }));
  //     }
  // }, [dispatch, authorId, companyId]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;



  const mangas = [
    { title: "Naruto Volume 41", type: "Shonen", status: "Read", img: avatarProfile },
    { title: "Maximum Gantz", type: "Seinen", status: "Read", img: avatarProfile },
    { title: "Rosario To Vampire", type: "Shojo", status: "Read", img: avatarProfile },
    { title: "Vampire Knight Memories", type: "Kodomo", status: "Read", img: avatarProfile },
  ];

// Filtrado de mangas por búsqueda
// const filteredMangas = useMemo(() => {
//   if (!search) return allMangas;

//   return allMangas.filter((manga) =>
//     manga.title.toLowerCase().includes(search.toLowerCase())
//   );
// }, [allMangas, search]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative w-full h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${favorites})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="flex flex-col justify-center items-center">
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold mb-6">
          Favorites
        </h1>
         {/* Search Bar */}
        <div className="relative w-full md:w-[70vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="search"
            value=""
            onChange=""
            placeholder="Find your manga here"
            className="w-full py-2 pl-12 pr-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
        </div>
        </div>
      </div>

      {/* Contenedor montado */}
      <div className="relative -mt-14 z-20 bg-white shadow-lg rounded-t-3xl px-6 m-auto py-8 max-w-max">
            
        {/* tarjetas provisionales mientras se implementa la logica del back aqui se deberia renderizar en componente CardManga el mismo de mangas */}
        {/* Manga Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {mangas.map((manga, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border"
            >
              <img
                src={manga.img}
                alt={manga.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{manga.title}</h2>
                <p className="text-sm text-gray-500">{manga.type}</p>
                <button className="mt-2 px-4 py-1 text-sm bg-green-400 text-white rounded-full">
                  {manga.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
