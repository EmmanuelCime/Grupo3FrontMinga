import ButtonSave from "../Components/ButtonSave"
import ButtonDelete from "../Components/ButtonDelete"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getMangas } from "../store/actions/mangasAction"
import { useParams } from "react-router-dom"
import { getCategory } from "../store/actions/categoryAction"


function EditManga() {
    const { allMangas, loading, error } = useSelector((state) => state.mangaReducer)
    const { allCategory } = useSelector((state) => state.categoryReducer)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getMangas())
            .unwrap()
            .catch((err) => console.error("Error fetching mangas:", err))
        dispatch(getCategory())
            .unwrap()
            .catch((err) => console.error("Error fetching mangas:", err))
    }, [dispatch])

    const manga = allMangas.find((manga) => manga._id === id)
    console.log(manga);

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

    if (!manga) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500 text-xl font-semibold">Manga not found</p>
            </div>
        )
    }

    return (
        <>
            <div className="flex">
                <div className="w-full max-w-sm mt-24 sm:ms-10 xl:ms-40 lg:me-20 xl:me-40 space-y-6 md:space-y-4">

                    <h1 className="text-center text-3xl mb-7 font-light">Edit Manga</h1>

                    <input
                        type="text"
                        name="title"
                        //value={formData.title}
                        //onChange={handleInputChange}
                        defaultValue={manga.title}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Title of the manga"
                    />
                    <input
                        type="text"
                        name="description"
                        //value={formData.description}
                        //onChange={handleInputChange}
                        defaultValue={manga.description}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        name="photo"
                        //value={formData.coverPhoto}
                        //onChange={handleInputChange}
                        defaultValue={manga.coverPhoto}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Photo"
                    />
                    <select type="text" name="category"
                        placeholder="Category" defaultValue={manga.category || ""}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                    >
                        <option value="">Select new category</option>
                        {allCategory.map((category, index) => (
                            <option key={index} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                    <div className="flex flex-col items-center gap-4">
                        <ButtonSave name="Edit" />
                        <ButtonDelete name="Delete" />
                    </div>
                </div>

                <div className="hidden sm:block mt-24">
                    <h3 className="text-center text-xl mb-7 font-light">{manga.title}</h3>
                    <img src={manga.coverPhoto} alt="manga.title" />
                </div>
            </div>
        </>
    )
}


export default EditManga