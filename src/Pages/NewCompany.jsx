import axios from 'axios'
import { useState } from "react"
import ButtonSend from "../Components/ButtonSend"


function NewCompany() {
    let [formData, setFormData] = useState({
        name: '',
        website: '',
        profileImage: '',
        description: ''
    })

    let [message, setMessage] = useState('')

    let handleChange = (e) => {
        let { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')

        try {
            await axios.post('http://localhost:8080/api/newcompany', formData)
            setMessage('The company has been successfully created')
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
                <div className="flex justify-center items-center md:w-1/2 my-32 md:my-16">
                    <form onSubmit={handleSubmit} className="flex flex-col w-[80vw] md:w-[40vw] gap-4 p-4">
                        <h1 className="text-2xl text-center font-bold mb-6">New Company</h1>
                        {message && <p className={`text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
                        
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
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Website"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="url"
                                name="profileImage"
                                value={formData.profileImage}
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
                        <div className="flex flex-col items-center gap-4">
                            <ButtonSend name="Send" />
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 hidden md:block ">
                    <img className="w-full h-[100vh] object-cover" src="https://s3-alpha-sig.figma.com/img/b8b4/c1ca/d91c01d1ff2a1a1341ce3c24609e0349?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqOlUaZrihLOcb8a3YFZ7Ab9cCdJgSozuary8Lfwzg~Qm2qbvbDU7onI-m8Wdue-ZUDzDAUmJ9BbtX6RUVGlUJLA-AZz~32HVTU7TcptrojKmmyc~IA~TEPcBiJP8gUvBfi1bctlKNkVBGklXo4n0gmdvoQwdmOARzm52LnXUUZQ0aXouvrCPWcePVswxYiZGXb36tHY0HccbIPF~SyUNto3ev7kZ1I2SZ4PtmrV2wvPGljVAdz-oGf4F-v0Stw68W2D9j2ycWUCLrwR06bmfID5lbvsWHvMYp7BULmbAqHLjBigaQdqyjOE-TRopZYkpOCjB0bYBsgHHqGxlaA1cg__" alt="" />
                </div>
            </div>
        </>
    )
}


export default NewCompany

















/* 
function NewCompany() {

    return (
        <>
            <div className="flex">
                <div className="w-full max-w-sm mt-24 sm:ms-10 xl:ms-40 lg:me-20 xl:me-40 space-y-6 md:space-y-4">

                    <h1 className="text-center text-3xl mb-7 font-light">New Company</h1>

                    <input
                        type="text"
                        name="name"
                        //value={formData.firstName}
                        //onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="website"
                        //value={formData.lastName}
                        //onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Website"
                    />
                    <input
                        type="text"
                        name="URLProfileImage"
                        //value={formData.date}
                        //onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="URL Profile Image"
                    />
                    <input
                        type="text"
                        name="description"
                        //value={formData.location}
                        //onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Description"
                    />
                    <div className="flex flex-col items-center gap-4">
                        <ButtonSend name="Send"/>
                    </div>
                </div>
                
                <div className="hidden sm:block mt-24">
                    <h3 className="text-center text-xl mb-7 font-light">Title of the manga</h3>
                    <img src="https://athenaposters.ca/wp-content/uploads/2022/01/RP21114-HUNTER-X-HUNTER-BOOK-KEY-ART.png" alt="" />
                </div>
            </div>
        </>
    )
}


export default NewCompany */