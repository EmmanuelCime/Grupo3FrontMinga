import ButtonSave from "../Components/ButtonSave"
import ButtonDelete from "../Components/ButtonDelete"
/*import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getMangas } from "../store/action/mangasAction"
import { useParams } from "react-router-dom"*/


function EditManga() {
    /*const { allMangas, search, loading, error } = useSelector((state) => state.mangaReducer)
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getMangas())
            .unwrap()
            .catch((err) => console.error("Error fetching mangas:", err))
    }, [dispatch])

    const manga = allMangas.find((manga) => manga._id === id)
console.log(manga);*/

    return (
        <>
            <div className="flex">
                <div className="w-full max-w-sm mt-24 sm:ms-10 xl:ms-40 lg:me-20 xl:me-40 space-y-6 md:space-y-4">

                    <h1 className="text-center text-3xl mb-7 font-light">Edit Manga</h1>

                    <input
                        type="text"
                        name="firstName"
                        //value={formData.firstName}
                        //onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Title of the manga"
                    />
                    <input
                        type="text"
                        name="lastName"
                        //value={formData.lastName}
                        //onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        name="location"
                        //value={formData.location}
                        //onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Photo"
                    />
                    <input
                        type="text"
                        name="date"
                        //value={formData.date}
                        //onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Category"
                    />
                    <div className="flex flex-col items-center gap-4">
                        <ButtonSave name="Edit" />
                        <ButtonDelete name="Delete" />
                    </div>
                </div>

                <div className="hidden sm:block mt-24">
                    <h3 className="text-center text-xl mb-7 font-light">Title of the manga</h3>
                    <img src="https://athenaposters.ca/wp-content/uploads/2022/01/RP21114-HUNTER-X-HUNTER-BOOK-KEY-ART.png" alt="" />
                </div>
            </div>
        </>
    )
}


export default EditManga