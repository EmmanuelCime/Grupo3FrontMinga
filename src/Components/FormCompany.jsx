import { useEffect, useState } from "react";
import ButtonSave from "./ButtonSave";
import ButtonDelete from "./ButtonDelete";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCompanyAction, updateCompany } from "../store/actions/companyAction";
import { setUpdateCompany } from "../store/actions/authAction";

export default function FormCompany({ className }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { updateCom } = useSelector((state) => state.companyReducer)
    const { company, loading, token, error } = useSelector((state) => state.authReducer)
    const [banUpdate, setBanUpdate] = useState(false)
    const [formData, setFormData] = useState({
        name: company?.name,
        webSite: company?.webSite,
        description: company?.description,
        photo: company?.photo,
        _id: company?._id,
    })

    if (loading) {
        return <div>Loading authors...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSave = () => {
        const updatedData = {
            name: formData.name,
            webSite: formData.webSite,
            description: formData.description,
            photo: formData.photo,
            _id: formData._id,
        }
        setBanUpdate(e => !e)
        dispatch(updateCompany({ updatedData: updatedData, token: token }))
    }
    useEffect(() => {
        if (updateCom != null && banUpdate) {
            dispatch(setUpdateCompany(updateCom))
            alert("Company updated successfully")
            navigate("/home")
        } else {
            dispatch(clearCompanyAction())
        }
    }, [updateCom, banUpdate, dispatch, navigate])

    /*const handleDelete = (_id) => {
        if (window.confirm("Are you sure you want to delete this company?")) {
            dispatch(deleteCompany(_id))
                .unwrap()
                .then(() => alert("Company deleted successfully!"))
                .catch((error) => alert(error || "Failed to delete company"))
        }
    }*/

    return (
        <div
            className={`flex items-center justify-center p-4 gap-8 md:flex-row sm:gap-x-20 lg:mt-66 md:mt-60 lg:gap-x-60 md:gap-x-28 flex-col-reverse bg-[#EBEBEB] sm:bg-white ${className}`}
        >
            {/* Formulario de edición */}
            <div className="w-full max-w-sm space-y-6 md:space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600 sm:bg-white bg-[#EBEBEB]"
                    placeholder="Company Name"
                    required
                />
                <input
                    type="text"
                    name="webSite"
                    value={formData.webSite}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600 sm:bg-white bg-[#EBEBEB]"
                    placeholder="web Site"
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600 sm:bg-white bg-[#EBEBEB]"
                    placeholder="Description"
                    required
                />
                <input
                    type="text"
                    name="photo"
                    value={formData.photo}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600 sm:bg-white bg-[#EBEBEB]"
                    placeholder="URL photo company"
                    required
                />
                <div className="flex flex-col items-center gap-4">
                    <ButtonSave name="Save" onClick={handleSave} />
                    <ButtonDelete name="Delete" />
                </div>
            </div>

            {/* Vista previa */}
            <div className="sm:flex flex-col items-center text-center space-y-1 mt-6">
                <img
                    src={formData.photo || "https://randomuser.me/api/portraits/men/32.jpg"}
                    alt="Company Logo"
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg"
                />
                <div className="hidden sm:block sm:flex flex-col items-start text-center space-y-1">
                    <h2 className="mt-4 ml-0.5 text-lg font-semibold">{formData.name}</h2>
                    <p className="text-gray-600 flex gap-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                        </svg>

                        {formData.webSite}</p>
                </div>
            </div>
        </div>
    );
}
