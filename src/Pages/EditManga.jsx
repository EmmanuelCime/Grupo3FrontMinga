import ButtonSave from "../Components/ButtonSave"
import ButtonDelete from "../Components/ButtonDelete"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getMangas } from "../store/actions/mangasAction"
import { useNavigate, useParams } from "react-router-dom"
import { getCategory } from "../store/actions/categoryAction"
import { updateManga } from "../store/actions/mangasAction"

function EditManga() {
    const { allMangas, loading, error } = useSelector((state) => state.mangaReducer)
    const { allCategory } = useSelector((state) => state.categoryReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        coverPhoto: "",
        categoryId: "",
    })

    useEffect(() => {
        dispatch(getMangas()).catch((err) => console.error("Error fetching mangas:", err))
        dispatch(getCategory()).catch((err) => console.error("Error fetching categories:", err))
    }, [dispatch])

    useEffect(() => {
        const manga = allMangas.find((manga) => manga._id === id)
        if (manga) {
            setFormData({
                title: manga.title,
                description: manga.description,
                coverPhoto: manga.coverPhoto,
                categoryId: manga.categoryId || "",
            })
        }
    }, [allMangas, id])

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

    if (!formData.title) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500 text-xl font-semibold">Manga not found</p>
            </div>
        )
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSave = () => {
        
        const updatedData = {
            title: formData.title,
            description: formData.description,
            coverPhoto: formData.coverPhoto,
            categoryId: formData.categoryId?._id || formData.categoryId,
        }

        dispatch(updateManga({id, updatedData: updatedData}))
            .unwrap()
            .then(() => {
                alert("Manga updated successfully!")
                navigate("/manager")
            })
            .catch((error) => {
                console.error("Error updating manga:", error)
                alert(error.response || "Failed to update manga")
                navigate("/manager")
            })
            
    }

    return (
        <>
            <div className="flex">
                <div className="w-full max-w-sm mt-24 sm:ms-10 xl:ms-40 lg:me-20 xl:me-40 space-y-6 md:space-y-4">
                    <h1 className="text-center text-3xl mb-7 font-light">Edit Manga</h1>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Title of the manga"
                    />
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        name="coverPhoto"
                        value={formData.coverPhoto}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Photo"
                    />
                    <select
                        name="categoryId"
                        value={formData.categoryId}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                    >
                        <option value="">Select new category</option>
                        {allCategory.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <div className="flex flex-col items-center gap-4">
                        <ButtonSave name="Edit" onClick={handleSave} />
                        <ButtonDelete name="Delete" />
                    </div>
                </div>

                <div className="hidden sm:block mt-24">
                    <h3 className="text-center text-xl mb-7 font-light">{formData.title}</h3>
                    <img src={formData.coverPhoto} alt={formData.title} />
                </div>
            </div>
        </>
    );
}

export default EditManga