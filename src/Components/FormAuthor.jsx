import { useState, useEffect } from "react"
import avatarProfile from "../assets/avatarProfile.jpg"
import ButtonSave from "./ButtonSave"
import ButtonDelete from "./ButtonDelete"
import { useDispatch, useSelector } from "react-redux";
import { getAuthor,updateAuthor } from "../store/actions/authorAction";
import { useNavigate } from "react-router-dom";

export default function FormAuthor({ className }) {
    const { allAuthor, loading, error } = useSelector((state) => state.authorReducer)
    const { user } = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        city: "",
        country: "",
        date: "",
        profileImage: avatarProfile,
    })

    useEffect(() => {
        dispatch(getAuthor())
            .unwrap()
            .then(() => console.log("Authors fetched successfully"))
            .catch((err) => console.error("Error fetching authors:", err))
    }, [dispatch])

    useEffect(() => {
        if (allAuthor && allAuthor.length > 0) {
            const author = allAuthor?.find((author) => author.userId === user._id);
            if (author) {
                setFormData({
                    id: author?._id,
                    firstName: author?.name,
                    lastName: author?.lastName,
                    city: author?.city,
                    country: author?.country,
                    date: author?.dateBorn,
                    profileImage: author?.photo || avatarProfile,
                })
            }
        }
    }, [allAuthor, user])

    if (loading) {
        return <div>Loading authors...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSave = () => {

        const updatedData = {
            _id: formData.id,
            name: formData.firstName,
            lastName: formData.lastName,
            city: formData.city,
            country: formData.country,
            dateBorn: formData.date,
            photo: formData.profileImage
        }

        dispatch(updateAuthor({ updatedData: updatedData }))
            .unwrap()
            .then(() => {
                alert("Author updated successfully!")
                navigate("/home")
            })
            .catch((error) => {
                console.error("Error updating author:", error)
                alert(error.response || "Failed to update author")
                navigate("/home")
            })

    }

    return (
        <div
            className={`flex items-center justify-center p-4 gap-8 md:flex-row sm:gap-x-20 lg:mt-66 md:mt-60 lg:gap-x-60 md:gap-x-28 flex-col-reverse bg-[#EBEBEB]  sm:bg-white ${className}`}>
            {/* Formulario de edición */}
            <div className="w-full max-w-sm space-y-6 md:space-y-4">
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600  sm:bg-white bg-[#EBEBEB]"
                    placeholder="Nombre"
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600  sm:bg-white bg-[#EBEBEB]"
                    placeholder="Apellido"
                />
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600  sm:bg-white bg-[#EBEBEB]"
                    placeholder="Ubicación"
                />
                <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600  sm:bg-white bg-[#EBEBEB]"
                    placeholder="Ubicación"
                />
                <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600  sm:bg-white bg-[#EBEBEB]"
                    placeholder="Fecha"
                />
                <input
                    type="text"
                    name="profileImage"
                    value={formData.profileImage}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600  sm:bg-white bg-[#EBEBEB] mb-10"
                    placeholder="URL de Imagen de Perfil"
                />
                <div className="flex flex-col items-center gap-4">
                    <ButtonSave name="Save" onClick={handleSave}/>
                    <ButtonDelete name="Delete" />
                </div>
            </div>

            {/* Vista previa del perfil */}
            <div className="sm:flex flex-col items-center text-center space-y-1 mt-6">
                <img
                    src={formData.profileImage}
                    alt="Profile"
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg"
                />
                <div className="hidden sm:flex flex-col items-start text-center space-y-1">
                    <h2 className=" mt-4 ml-0.5 text-lg font-semibold">{`${formData.firstName} ${formData.lastName}`}</h2>
                    <p className=" text-gray-600 flex items-center gap-2">
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
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                        </svg>
                        {`${formData.city}, ${formData.country}`}
                    </p>
                    <p className=" text-gray-600 flex items-center gap-2">
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
                                d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                            />
                        </svg>
                        {formData.date}
                    </p>
                </div>
            </div>
        </div>
    )
}