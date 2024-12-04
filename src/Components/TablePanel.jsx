import { useState } from "react";

export default function TablePanel() {
    const [view, setView] = useState("companies");
    const [data, setData] = useState({
        companies: [
            { name: "Blue Team", website: "www.blueteam.com", color: "blue", active: true },
            { name: "Red Team", website: "www.redteam.com", color: "red", active: true },
            { name: "Orange Team", website: "www.orangeteam.com", color: "orange", active: true },
            { name: "Purple Team", website: "www.purpleteam.com", color: "purple", active: true },
        ],
        authors: [
            { name: "Lucas Ezequiel Silva", date: "16/02/2000", location: "Caseros", photo: "https://randomuser.me/api/portraits/women/45.jpg", active: true },
            { name: "Alejo Villafañe", date: "11/06/1981", location: "CABA", photo: "https://randomuser.me/api/portraits/men/43.jpg", active: true },
            { name: "Ignacio Borraz", date: "25/04/1990", location: "Cordoba", photo: "https://randomuser.me/api/portraits/women/42.jpg", active: false },
            { name: "Eric Rodriguez", date: "04/01/2000", location: "Corrientes", photo: "https://randomuser.me/api/portraits/women/41.jpg", active: true },
        ],
    });

    const toggleActive = (type, index) => {
        const updatedData = { ...data };
        updatedData[type][index].active = !updatedData[type][index].active;
        setData(updatedData);
    };

    return (
        <>
            {/* Table */}
            <div className="border rounded-t-lg shadow-md bg-white w-full md:w-8/12 mx-auto overflow-x-auto">
                <div className="flex justify-center border-b-2 border-orange-500  rounded-t-lg">
                    <button
                        className={`px-4 py-2 rounded-tl-lg w-full font-bold text-xs sm:text-sm ${view === "companies" ? "bg-orange-500 text-white" : "bg-gray-200 text-orange-500"}`}
                        onClick={() => setView("companies")}
                    >
                        Companies
                    </button>
                    <button
                        className={`px-4 py-2 rounded-tr-lg w-full font-bold text-xs sm:text-sm ${view === "authors" ? "bg-orange-500 text-white" : "bg-gray-200 text-orange-500"}`}
                        onClick={() => setView("authors")}
                    >
                        Authors
                    </button>
                </div>
                <table className="w-full text-left border-collapse">
                    <tbody>
                        {view === "companies"
                            ? data.companies.map((company, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-4 py-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5 text-orange-500"
                                        >
                                            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                        </svg>
                                    </td>
                                    <td className="px-4 py-2 text-xs sm:text-sm">{company.name}</td>
                                    <td className="hidden sm:table-cell px-4 py-2 text-xs sm:text-sm">{company.website}</td>
                                    <td className="hidden sm:table-cell px-4 py-2">
                                        <div
                                            className={`w-8 h-8 rounded-full ${company.color === "blue" ? "bg-blue-500" : company.color === "red" ? "bg-red-500" : company.color === "orange" ? "bg-orange-500" : "bg-purple-500"}`}
                                            title={`${company.color.charAt(0).toUpperCase() + company.color.slice(1)} Team`}
                                        />
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        <button
                                            className={`w-10 h-6 rounded-full mx-auto ${company.active ? "bg-orange-500" : "bg-gray-300"}`}
                                            onClick={() => toggleActive("companies", index)}
                                        >
                                            <span
                                                className={`block w-4 h-4 rounded-full bg-white transform transition-transform ${company.active ? "translate-x-5" : "translate-x-1"}`}
                                            ></span>
                                        </button>
                                    </td>
                                </tr>
                            ))
                            : data.authors.map((author, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-4 py-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5 text-orange-500"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </td>
                                    <td className="px-4 py-2 text-sm">{author.name}</td>
                                    <td className="hidden sm:table-cell px-4 py-2">{author.date}</td>
                                    <td className="hidden sm:table-cell px-4 py-2">{author.location}</td>
                                    <td className="hidden sm:table-cell px-4 py-2">
                                        <img
                                            src={author.photo}
                                            alt={author.name}
                                            className="w-8 h-8 rounded-full"
                                        />
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        <button
                                            className={`w-10 h-6 rounded-full mx-auto ${author.active ? "bg-orange-500" : "bg-gray-300"}`}
                                            onClick={() => toggleActive("authors", index)}
                                        >
                                            <span
                                                className={`block w-4 h-4 rounded-full bg-white transform transition-transform ${author.active ? "translate-x-5" : "translate-x-1"}`}
                                            ></span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
