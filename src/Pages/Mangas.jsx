import { useDispatch, useSelector } from "react-redux";
import CardManga from "../Components/CardManga"
import { getCategoryColor } from "../utils/utils";
import { getMangas, setSearch } from "../store/actions/mangasAction";
import { useEffect } from "react";
import { getCategory } from "../store/actions/categoryAction";
import CategoryComponent from "../Components/Category";

const categoryColorClasses = {
  red: "bg-red-300 text-red-300",
  blue: "bg-blue-300 text-blue-300",
  green: "bg-green-300 text-green-300",
  yellow: "bg-yellow-300 text-yellow-300",
  purple: "bg-purple-300 text-purple-300",
  pink: "bg-pink-300 text-pink-300",
  orange: "bg-orange-300 text-orange-300",
}




/*function Mangas() {
  const { allMangas, search, loading, error } = useSelector(state => state.mangaReducer)
  const { allCategory } = useSelector(state => state.categoryReducer)
  const dispatch = useDispatch()
  console.log(allCategory);

  useEffect(() => {
    dispatch(getMangas())
      .unwrap()
      .catch((err) => console.error("Error fetching mangas:", err))
    dispatch(getCategory())
      .unwrap()
      .catch((err) => console.error("Error fetching categories:", err))
  }, [dispatch])

  const handleSearch = (e) => {
    const searchTerm = e.target.value
    dispatch(setSearch(searchTerm))
    const filtered = searchTerm
      ? allMangas.filter((manga) =>
        manga.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      : allMangas
    dispatch({ type: "SET_FILTERED_MANGAS", payload: filtered })
  }

  const uniqueCategories = [...new Set(allMangas.map((manga) => manga.categoryId))]
  return (
    <>
      <div className="bg-mangas bg-cover bg-center bg-no-repeat bg-opacity-40 w-full h-[70vh] px-5 flex flex-col justify-center items-center">
        <p className='w-auto mb-8 mt-36 text-6xl text-white font-bold'>Mangas</p>
        <div className="relative w-full md:w-[70vw]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
          </svg>
          <input type='search' value={search} onChange={handleSearch} placeholder="Find your manga here"
            className='w-full py-2 pl-12 pr-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none' />
        </div>
      </div>
      <div className="w-full md:w-[90vw] bg-white rounded-t-3xl px-3 sm:px-20 pt-5 pb-5 -mt-10 mx-auto shadow drop-shadow-md">
        <div className="w-full h-full lg:px-5 flex flex-wrap justify-around md:justify-start">
          {uniqueCategories.map((category, index) => {
            const categoryColor = getCategoryColor(category, uniqueCategories)
            return (
              <button value={category.name} className={`px-2 m-1 rounded-full ${categoryColorClasses[categoryColor]?.split(" ")[0]}`} key={index}>
                {category.name}
              </button>
            )
          })}
        </div>
        <div className="flex flex-wrap justify-around">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {allMangas.map((manga, index) => (
            <CardManga key={index} manga={manga} uniqueCategories={uniqueCategories} categoryColorClasses={categoryColorClasses} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Mangas*/

function Mangas() {
  const { allMangas, search, loading, error } = useSelector((state) => state.mangaReducer);
  const { allCategory } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMangas())
      .unwrap()
      .catch((err) => console.error("Error fetching mangas:", err))
    dispatch(getCategory())
      .unwrap()
      .catch((err) => console.error("Error fetching categories:", err));
  }, [dispatch])

  const handleSearch = (e) => {
    const searchTerm = e.target.value
    dispatch(setSearch(searchTerm))
  };

  const filteredMangas = search
    ? allMangas.filter((manga) =>
        manga.title.toLowerCase().includes(search.toLowerCase())
      )
    : allMangas

  /*const uniqueCategories = [
    ...new Set(
      allMangas.map((manga) => {
        const category = allCategory.find((cat) => cat._id === manga.categoryId);
        return category ? category.name : "Unknown"
      })
    )
  ]*/


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
            onChange={handleSearch}
            placeholder="Find your manga here"
            className="w-full py-2 pl-12 pr-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
        </div>
      </div>
      <div className="w-full md:w-[90vw] bg-white rounded-t-3xl px-3 sm:px-20 pt-5 pb-5 -mt-10 mx-auto shadow drop-shadow-md">
        <div className="w-full h-full lg:px-5 flex flex-wrap justify-around md:justify-start">
          <CategoryComponent ></CategoryComponent>
        </div>
        <div className="flex flex-wrap justify-around">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {filteredMangas.map((manga, index) => (
            <CardManga
              key={index}
              manga={manga}
              categoryColorClasses={categoryColorClasses}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Mangas;
