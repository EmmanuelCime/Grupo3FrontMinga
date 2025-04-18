import { useState } from "react"
import ButtonSend from "../Components/ButtonSend"
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from "react-router-dom"
import { newAuthor } from "../store/actions/authorAction"
import imageSignUp from "../assets/imageSignUp.jpg";

function NewAuthor() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer)

    const [formData, setFormData] = useState({
        userId: user._id,
        name: '',
        lastName: '',
        city: '',
        country: '',
        dateBorn: '',
        photo: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newData = {
            userId: formData.userId,
            name: formData.name,
            lastName: formData.lastName,
            city: formData.city,
            country: formData.country,
            dateBorn: formData.dateBorn,
            photo: formData.photo
        }
        dispatch(newAuthor({ newData: newData }))
        .unwrap()
        .then(() => {
            alert("Author create successfully!")
            navigate("/home")
        })
        .catch((error) => {
            console.error("Error creating author:", error)
            alert(error.response || "Failed to create author")
            navigate("/home")
        })
    }


    return (
        <>
            <div className="flex justify-center items-center w-full">
                <div className="flex justify-center items-center md:w-1/2 my-32 md:my-16">
                    <form onSubmit={handleSubmit} className="flex flex-col w-[90vw] md:w-[40vw] gap-4 p-4">
                        <h1 className="text-2xl text-center font-bold mb-6">New Author</h1>
                        
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="City"
                                required
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Country"
                                required
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="date"
                                name="dateBorn"
                                value={formData.dateBorn}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Birth month"
                                required
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="url"
                                name="photo"
                                value={formData.photo}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="URL Profile Image"
                                required
                            />
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <ButtonSend name="Send" onClick={handleSubmit}/>
                        </div>
                        <div className="flex flex-col items-center pt-3 gap-3">
                            <NavLink to="/mangas" className="md:text-xl lg:text-xl w-32 lg:w-52 text-center bg-orange-500 text-white hover:bg-orange-700 hover:bold px-3 py-2 rounded-lg font-semibold">Back to Mangas</NavLink>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 hidden md:block">
                    <img className='w-full h-[100vh] object-cover' src={imageSignUp} alt=""/>
                </div>
            </div>
        </>
    )
}


export default NewAuthor