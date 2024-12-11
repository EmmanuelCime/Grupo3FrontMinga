import { useState } from "react"
import { NavLink } from 'react-router-dom'
import ButtonSend from "../Components/ButtonSend"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function NewManga() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { author, company, user, loading, token} = useSelector((state) => state. authReducer)
    const { allCategory } = useSelector((state) => state.categoryReducer)
console.log(company)
    const [formData, setFormData] = useState({
        title: '',
        categoryId: '',
        coverPhoto: '',
        description: '',
        //authorId: author._id || company._id
    })

    let handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        const newData = {
            title: formData.title,
            categoryId: formData.categoryId?._id || formData.categoryId,
            coverPhoto: formData.coverPhoto,
            description: formData.description,
            authorId: formData.authorId
        }
        dispatch(newManga({ newData: newData }))
            .unwrap()
            .then(() => {
                alert("Manga create successfully!")
                navigate("/manager")
            })
            .catch((error) => {
                console.error("Error creating Manga:", error)
                alert(error.response || "Failed to create Manga")
                navigate("/newManga")
            })
    }

    return (
        <>
            <div className="flex items-center justify-center w-full h-[100vh]">
                <div className="flex justify-center items-center md:w-1/2 my-32 md:my-16 ">
                    <form onSubmit={handleSubmit} className="flex flex-col w-[80vw] md:w-[40vw] gap-4 p-4">
                        <h1 className="text-2xl text-center font-bold mb-6">New Manga</h1>

                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Insert title"
                            />
                        </div>
                        <select
                            name="categoryId"
                            value={formData.categoryId}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        >
                            <option className="border-b border-gray-400 outline-none focus:border-gray-600" value="">Select new category</option>
                            {allCategory.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>

                        <div className="mt-1 mb-4">
                            <input
                                type="url"
                                name="coverPhoto"
                                value={formData.coverPhoto}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Insert cover photo"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Insert description"
                            />
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <ButtonSend name="Send" onClick={handleSubmit} />
                        </div>
                        <div className="flex flex-col items-center pt-3 gap-3">
                            <NavLink to="/mangas" className="md:text-xl lg:text-xl w-32 lg:w-52 text-center bg-orange-500 text-white hover:bg-orange-700 hover:bold px-3 py-2 rounded-lg font-semibold">Back to Mangas</NavLink>
                        </div>
                    </form>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <img className="w-full h-[100vh] object-cover" src="https://s3-alpha-sig.figma.com/img/b8b4/c1ca/d91c01d1ff2a1a1341ce3c24609e0349?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqOlUaZrihLOcb8a3YFZ7Ab9cCdJgSozuary8Lfwzg~Qm2qbvbDU7onI-m8Wdue-ZUDzDAUmJ9BbtX6RUVGlUJLA-AZz~32HVTU7TcptrojKmmyc~IA~TEPcBiJP8gUvBfi1bctlKNkVBGklXo4n0gmdvoQwdmOARzm52LnXUUZQ0aXouvrCPWcePVswxYiZGXb36tHY0HccbIPF~SyUNto3ev7kZ1I2SZ4PtmrV2wvPGljVAdz-oGf4F-v0Stw68W2D9j2ycWUCLrwR06bmfID5lbvsWHvMYp7BULmbAqHLjBigaQdqyjOE-TRopZYkpOCjB0bYBsgHHqGxlaA1cg__" alt="" />
                </div>
            </div>
        </>
    )
}


export default NewManga