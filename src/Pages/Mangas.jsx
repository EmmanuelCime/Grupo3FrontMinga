import { useDispatch, useSelector } from "react-redux";
import { getMangas, setSearch } from "../store/actions/mangasAction";
import { useEffect, useMemo } from "react";
import CardManga from "../Components/CardManga"
import Category from "../Components/Category";

function Mangas() {
  const { allMangas, search, loading, error } = useSelector((state) => state.mangaReducer)
  const {selectedCategory} = useSelector((state) => state.categoryReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMangas())
      .unwrap()
      .catch((err) => console.error("Error fetching mangas:", err))
  }, [dispatch])


  // Filtrado de mangas por categoría y búsqueda
  const filteredMangas = useMemo(() => {
    let filtered = allMangas

    // Filtro por categoría
    if (selectedCategory) {
      filtered = filtered.filter(
        (manga) => manga.categoryId?.name.toLowerCase() === selectedCategory.toLowerCase()
      )
    }
    // Filtro por búsqueda
    if (search) {
      filtered = filtered.filter((manga) =>
        manga.title.toLowerCase().includes(search.toLowerCase())
      )
    }
    return filtered
  }, [allMangas, selectedCategory, search])

  return (
    <>
      <div className="bg-mangas bg-cover bg-center bg-no-repeat bg-opacity-40 w-full h-[70vh] px-5 flex flex-col justify-center items-center">
        <p className="w-auto mb-8 mt-36 text-6xl text-white font-bold">Mangas</p>
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
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            placeholder="Find your manga here"
            className="w-full py-2 pl-12 pr-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
        </div>
      </div>
      <div className="w-full md:w-[90vw] bg-white rounded-t-3xl px-3 sm:px-20 pt-5 pb-20 -mt-10 mx-auto shadow drop-shadow-md">
        <div className="w-full h-full lg:px-5 flex flex-wrap justify-around md:justify-start">
          <Category />
        </div>
        <div className="flex flex-wrap justify-around">
          {loading ? (
            <div className="min-h-screen flex items-center justify-center">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="animate-spin h-20 w-20 mr-3"
              >
                <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z" />
              </svg>
              <p className="text-orange-500 text-xl font-semibold">Loading...</p>
            </div>
          ) : error ? (
            <p className="text-red-500 text-lg font-semibold">Error: {error}</p>
          ) : filteredMangas.length > 0 ? (
            filteredMangas.map((manga, index) => (
              <CardManga key={index} manga={manga} />
            ))
          ) : (
            <div className="w-64 h-36 md:w-80 md:h-44 flex items-center mt-4 rounded-2xl shadow-md">
              <p className="text-center text-3xl text-gray-500 font-bold">
                {"We don't have that edition"}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Mangas;
