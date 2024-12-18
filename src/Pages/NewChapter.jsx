import { useState } from "react"
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import ButtonSend from "../Components/ButtonSend"
import { useDispatch } from 'react-redux'
import { newChapter } from "../store/actions/chapterAction"


function NewChapter() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const [formData, setFormData] = useState({
        mangaId: id,
        title: '',
        coverPhoto: '',
        order: '',
        pages: [],
    })

    const [pageInput, setPageInput] = useState("")

    let handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleAddPage = () => {
        if (pageInput.trim()) {
            setFormData((prevData) => ({
                ...prevData,
                pages: [...prevData.pages, pageInput.trim()],
            }))
            setPageInput("")
        }
    }

    const handleRemovePage = (index) => {
        setFormData((prevData) => ({
            ...prevData,
            pages: prevData.pages.filter((_, i) => i !== index),
        }))
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        const newData = {
            mangaId: formData.mangaId,
            title: formData.title,
            coverPhoto: formData.coverPhoto,
            order: formData.order,
            pages: formData.pages
        }
        dispatch(newChapter({ newData: newData }))
            .unwrap()
            .then(() => {
                alert("Chapter create successfully")
                navigate("/manager")
            })
            .catch((error) => {
                console.error("Error creating chapter: ", error)
                alert(error.response || "Failed to create chapter")
                navigate("/manager")
            })
    }

    return (
        <>
            <div className="flex justify-center items-center w-full">
                <div className="flex justify-center items-center md:w-1/2 my-32 md:my-16">
                    <form className="flex flex-col w-[90vw] md:w-[40vw] gap-4 p-4">
                        <h1 className="text-2xl text-center font-bold mb-6">New Chapter</h1>

                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Title of the chapter"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="coverPhoto"
                                value={formData.coverPhoto}
                                onChange={handleInputChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Url cover photo of the chapter"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="number"
                                name="order"
                                value={formData.order}
                                onChange={handleInputChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Order"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="pages"
                                value={pageInput}
                                onChange={(e) => setPageInput(e.target.value)}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Add page URL"
                            />
                            <button
                                type="button"
                                onClick={handleAddPage}
                                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                            >
                                Add Page
                            </button>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-bold">Pages:</h3>
                            <ul>
                                {formData.pages.map((page, index) => (
                                    <li key={index} className="flex justify-between items-center">
                                        <span>{page}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemovePage(index)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <ButtonSend name="Send" onClick={handleSubmit} />
                        </div>
                        <div className="flex flex-col items-center pt-3 gap-3">
                            <NavLink to="/manager" className="md:text-xl lg:text-xl w-32 lg:w-52 text-center bg-orange-500 text-white hover:bg-orange-700 hover:bold px-3 py-2 rounded-lg font-semibold">Back to Manager</NavLink>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 hidden md:block">
                    <img className='w-full h-[100vh] object-cover' src="https://s3-alpha-sig.figma.com/img/cd7b/cfec/c07083cef0707bd5864b287bac613f2b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aa72~qaQ-Re8JBUPxzkxXnEmKnF~Nksubt4JQlzlSyaNzCKI0yOFHb4M3jaIdNjawWVO7VvkTsBWhTN03z4KsmZA8WhV2jMxWVM2PJAnD0piJN30WPlc~QnVykKFP4CwvEbbwihCfqj9VoAAHWocAqPpcZDmnlZvtbifXp5LaI6iv8fUVn5-MuCjlzaYt1mRYVISghahbU3i2vVtbPt5V7gYm5Kq6vJX4et7u36v8lwqsnUviMfvNVJlj3t1c8l6vYcPmsBFDMzEU~6r3HAvc-IIchLyEBooDoJHVTy9IaK2pFeS-Gwe3nW6UApCQiKHRAitgbRjVrp7MqrZqRXw4g__" alt="" />
                </div>
            </div>
        </>
    )
}


export default NewChapter