import { useState } from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import ButtonSend from "../Components/ButtonSend"
import { useDispatch, useSelector } from 'react-redux'
import { newCompany } from '../store/actions/companyAction'
import imageNewRole from "../assets/imageNewRole.jpg";

function NewCompany() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer)

    const [formData, setFormData] = useState({
        userId: user._id,
        name: '',
        webSite: '',
        photo: '',
        description: '',
        active: true,
        country: ' '
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
            webSite: formData.webSite,
            photo: formData.photo,
            description: formData.description,
            active: formData.active,
            country: formData.country
        }
        console.log(newData)
        dispatch(newCompany({ newData: newData }))
            .unwrap()
            .then(() => {
                alert("Company create successfully!")
                navigate("/home")
            })
            .catch((error) => {
                console.error("Error creating company: ", error)
                alert(error.response || "Failed to create company")
                navigate("/home")
            })
    }

    return (
        <>
            <div className="flex items-center justify-center w-full h-[100vh]">
                <div className="flex justify-center items-center md:w-1/2 my-32 md:my-16">
                    <form onSubmit={handleSubmit} className="flex flex-col w-[80vw] md:w-[40vw] gap-4 p-4">
                        <h1 className="text-2xl text-center font-bold mb-6">New Company</h1>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="url"
                                name="webSite"
                                value={formData.webSite}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Website"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="url"
                                name="photo"
                                value={formData.photo}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="URL Profile Image"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Description"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <ButtonSend name="Send" onClick={handleSubmit} />
                        </div>
                        <div className="flex flex-col items-center pt-3 gap-3">
                            <NavLink to="/manager" className="w-full bg-[#fb8151] text-white py-3 rounded-3xl font-bold shadow-md transition-transform duration-200 transform hover:bg-[#c36540] hover:scale-105">Back to Manager</NavLink>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 hidden md:block ">
                    <img className="w-full h-[100vh] object-cover" src={imageNewRole} alt="" />
                </div>
            </div>
        </>
    )
}


export default NewCompany