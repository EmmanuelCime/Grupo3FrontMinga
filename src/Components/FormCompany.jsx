import { useState } from "react";
import ButtonSave from "./ButtonSave";
import ButtonDelete from "./ButtonDelete";

export default function FormCompany({ className }) {
    const [formData, setFormData] = useState({
        name: "Toei Animation",
        webSite: "www.toeianimation.com",
        description: "",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        city: "Gynza",
        country: "Japon",
        active: true,
        userId: "",
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

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
                    placeholder="Nombre de la Compañía"
                    required
                />
                <input
                    type="text"
                    name="webSite"
                    value={formData.webSite}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600 sm:bg-white bg-[#EBEBEB]"
                    placeholder="Sitio Web"
                    required
                />

                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600 sm:bg-white bg-[#EBEBEB]"
                    placeholder="Ciudad"
                    required
                />
                <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600 sm:bg-white bg-[#EBEBEB]"
                    placeholder="País"
                    required
                />
                <input
                    type="text"
                    name="photo"
                    value={formData.photo}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-400 outline-none focus:border-gray-600 sm:bg-white bg-[#EBEBEB]"
                    placeholder="URL de la Foto"
                    required
                />
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="active"
                        checked={formData.active}
                        onChange={handleInputChange}
                        className="mr-2"
                    />
                    <label htmlFor="active" className="text-gray-600">
                        Activo
                    </label>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <ButtonSave name="Guardar" />
                    <ButtonDelete name="Eliminar" />
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
                    <p className="text-gray-600 flex gap-1"><svg
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
                        {formData.city}, {formData.country}</p>

                </div>
            </div>
        </div>
    );
}
