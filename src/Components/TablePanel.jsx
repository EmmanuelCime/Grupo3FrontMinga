import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allAuthorAction, allCompanyAction, UpdateAuthorActive, UpdateCompanyActive } from "../store/actions/adminPanelAction";


export default function TablePanel() {
    const { user, loading, token} = useSelector((state) => state.authReducer)
    const { allAuthor, allCompany, loadingCompany, loadingAuthor} = useSelector((state) => state.panelAdminReducer)
    const [view, setView] = useState("companies");
    const dispatch = useDispatch()
    const [data, setData] = useState({companies: allCompany, authors: allAuthor});

    useEffect(()=>{      
            dispatch(allAuthorAction(token))
            dispatch(allCompanyAction(token))
    },[])

    useEffect(()=>{
        const test = {companies: allCompany, authors: allAuthor}
            setData(test)
    }, [allAuthor, allCompany])



    const toggleActive = (type, index, info, token) => {
        if (type == "companies" ) {
            const {_id, active} = info
            const test = {_id: _id, active: !active}
            dispatch(UpdateCompanyActive({token: token, company:test}))
        }else{
            const {_id, active} = info
            const test = {_id: _id, active: !active}
            dispatch(UpdateAuthorActive({token: token, author:test}))
        }
        
        // const updatedData = { ...data };
        // updatedData[type][index].active = !updatedData[type][index].active;
        // setData(updatedData);
    };
    if (!loadingAuthor && !loadingAuthor) {
        return (
            <>
                {/* Table */}
                <div className="border rounded-t-lg shadow-md bg-white w-full md:max-w-xl lg:max-w-2xl mx-auto overflow-x-auto h-full mb-10">
                    <div className="flex justify-center border-b-2 border-orange-500  rounded-t-lg h-full">
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
                    <table className="w-full h-full text-left border-collapse">
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
                                            
                                            <div className={`w-8 h-8 rounded-full `}>
                                                <img src={company.photo} className="w-full object-cover rounded-full h-full" alt="photocompany" />
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <button
                                                className={`w-10 h-6 rounded-full mx-auto ${company.active ? "bg-orange-500" : "bg-gray-300"}`}
                                                onClick={() => toggleActive("companies", index, company, token)}
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
                                        <td className="px- py-2 text-sm">{author.name}</td>
                                        <td className="hidden sm:table-cell px-4 py-2">{author.dateBorn}</td>
                                        <td className="hidden sm:table-cell px-4 py-2">{author.city}</td>
                                        <td className="hidden lg:table-cell px-4 py-2">
                                            <img
                                                src={author.photo}
                                                alt={author.name}
                                                className="w-8 h-8 object-cover rounded-full"
                                            />
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <button
                                                className={`w-10 h-6 rounded-full mx-auto ${author.active ? "bg-orange-500" : "bg-gray-300"}`}
                                                onClick={() => toggleActive("authors", index, author, token)}
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
    
}
