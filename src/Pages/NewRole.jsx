import React, { useState } from "react";
import imageNewRole from "../assets/imageNewRole.jpg";

export default function NewRole() {
    const [selectedRole, setSelectedRole] = useState("");

    return (
        <div className="flex h-screen">
            {/* Lado izquierdo */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white">
                {/* Título */}
                <div className="text-center">
                    <p className="text-lg font-semibold text-gray-600 mb-4">Change role to</p>
                    <h1 className="text-4xl font-bold text-orange-500 flex items-center mb-6">
                        Minga <span className="ml-2 text-black">雪</span>
                    </h1>
                </div>

                {/* Botones de Roles */}
                <div className="space-y-4 w-3/4">
                    {/* Botón: Join as an Author */}
                    <button
                        onClick={() => setSelectedRole("author")}
                        className={`w-full flex items-center p-4 border-2 rounded-3xl shadow-sm transition ${selectedRole === "author"
                            ? "border-orange-500 bg-orange-50"
                            : "border-gray-300 hover:bg-gray-50"
                            }`}
                    >
                        <div className="flex items-center space-x-4">
                            {/* Avatares */}
                            <div className="flex">
                                <img
                                    src="https://randomuser.me/api/portraits/women/45.jpg"
                                    alt="User 1"
                                    className="w-8 h-8 rounded-full border-2 border-white -ml-2 mt-1"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="User 2"
                                    className="w-10 h-10 rounded-full border-2 border-white -ml-2"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/women/10.jpg"
                                    alt="User 3"
                                    className="w-8 h-8 rounded-full border-2 border-white -ml-2 mt-1"
                                />
                            </div>

                            {/* Texto */}
                            <div className="text-left">
                                <p
                                    className={`font-bold ${selectedRole === "author" ? "text-orange-500" : "text-gray-700"
                                        }`}
                                >
                                    Join as an Author!
                                </p>
                                <p
                                    className={`text-sm ${selectedRole === "author" ? "text-orange-500" : "text-gray-700"
                                        }`}
                                >I’m a reader writing a manga</p>
                            </div>
                        </div>
                    </button>

                    {/* Botón: Join as a Company */}
                    <button
                        onClick={() => setSelectedRole("company")}
                        className={`w-full flex items-center p-4 border-2 rounded-3xl shadow-sm transition ${selectedRole === "company"
                            ? "border-orange-500 bg-orange-50"
                            : "border-gray-300 hover:bg-gray-50"
                            }`}
                    >
                        <div className="flex items-center space-x-4">
                            {/* Avatares */}
                            <div className="flex">
                                <img
                                    src="https://randomuser.me/api/portraits/men/5.jpg"
                                    alt="User 1"
                                    className="w-8 h-8 rounded-full border-2 border-white -ml-2 mt-1"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/women/20.jpg"
                                    alt="User 2"
                                    className="w-10 h-10 rounded-full border-2 border-white -ml-2"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/men/17.jpg"
                                    alt="User 3"
                                    className="w-8 h-8 rounded-full border-2 border-white -ml-2 mt-1"
                                />
                            </div>

                            {/* Texto */}
                            <div className="text-left">
                                <p
                                    className={`font-bold ${selectedRole === "company" ? "text-orange-500" : "text-gray-700"
                                        }`}
                                >
                                    Join as a Company!
                                </p>
                                <p
                                    className={`text-sm ${selectedRole === "company" ? "text-orange-500" : "text-gray-700"
                                        }`}>
                                    I’m a company and I want to publish my comics
                                </p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Lado derecho */}
            <div
                className="hidden md:block w-1/2 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageNewRole})` }}
            >
                <div className="flex flex-col  h-full p-8 bg-black bg-opacity-50 text-white ">
                    <div className="flex flex-col mx-20 mt-20 ">
                        <p className="text-2xl mb-5 font-bold">
                            Minga.com is the best place to find manga reviews. We’ve been super impressed
                            by the quality of applicants.
                        </p>
                        <p className="italic">— Ignacio Borraz</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
