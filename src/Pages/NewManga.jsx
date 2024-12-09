import axios from 'axios'
import { useState } from "react"
import ButtonSend from "../Components/ButtonSend"


function NewManga() {
    let [formData, setFormData] = useState({
        title: '',
        category: '',
        coverPhoto: '',
        description: ''
    })

    let [message, setMessage] = useState('')

    let handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')

        try {
            await axios.post('http://localhost:8080/api/newmanga', formData)
            setMessage('The manga has been successfully created')
        } catch (error) {
            if (error.response) {
                setMessage(`error ${error.response.data.message}`)
            } else {
                setMessage('Error unexpected... please try again')
            }
        }
    }

    return (
        <>
            <div className="flex items-center justify-center w-full h-[100vh]">
                <div className="flex justify-center items-center md:w-1/2 my-32 md:my-16 ">
                    <form onSubmit={handleSubmit} className="flex flex-col w-[80vw] md:w-[40vw] gap-4 p-4">
                        <h1 className="text-2xl text-center font-bold mb-6">New Manga</h1>
                        {message && <p className={`text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}

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
                        <div className="mt-1 mb-4">
                            <input list="categoryOption" name="category" value={formData.category} onChange={handleChange} className="w-full border-gray-400 focus:border-gray-500 px-2 bg-transparent outline-none border-0 border-b-2" placeholder="Insert a category" />
                            <datalist id="categoryOption" className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                                <option value=" Comedy" />
                                <option value="Fantasy" />
                                <option value="Horror" />
                                <option value="Action" />
                            </datalist>
                        </div>
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
                            <ButtonSend name="Send" />
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