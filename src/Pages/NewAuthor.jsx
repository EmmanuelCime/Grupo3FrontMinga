import axios from 'axios'
import { useState } from "react"
import ButtonSend from "../Components/ButtonSend"


function NewAuthor() {
    let [formData, setFormData] = useState({
        name: '',
        lastName: '',
        location: '',
        birthday: '',
        profileImage: ''
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
            await axios.post('http://localhost:8080/api/newauthor', formData)
            setMessage('The author has been successfully created')
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
            <div className="flex justify-center items-center w-full">
                <div className="flex justify-center items-center md:w-1/2 my-32 md:my-16">
                    <form onSubmit={handleSubmit} className="flex flex-col w-[90vw] md:w-[40vw] gap-4 p-4">
                        <h1 className="text-2xl text-center font-bold mb-6">New Author</h1>
                        {message && <p className={`text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
                        
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Location"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="date"
                                name="birthday"
                                value={formData.birthday}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="url"
                                name="profileImage"
                                value={formData.profileImage}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="URL Profile Image"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <ButtonSend name="Send"/>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 hidden md:block">
                    <img className='w-full h-[100vh] object-cover' src="https://s3-alpha-sig.figma.com/img/cd7b/cfec/c07083cef0707bd5864b287bac613f2b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aa72~qaQ-Re8JBUPxzkxXnEmKnF~Nksubt4JQlzlSyaNzCKI0yOFHb4M3jaIdNjawWVO7VvkTsBWhTN03z4KsmZA8WhV2jMxWVM2PJAnD0piJN30WPlc~QnVykKFP4CwvEbbwihCfqj9VoAAHWocAqPpcZDmnlZvtbifXp5LaI6iv8fUVn5-MuCjlzaYt1mRYVISghahbU3i2vVtbPt5V7gYm5Kq6vJX4et7u36v8lwqsnUviMfvNVJlj3t1c8l6vYcPmsBFDMzEU~6r3HAvc-IIchLyEBooDoJHVTy9IaK2pFeS-Gwe3nW6UApCQiKHRAitgbRjVrp7MqrZqRXw4g__" alt=""/>
                </div>
            </div>
        </>
    )
}


export default NewAuthor