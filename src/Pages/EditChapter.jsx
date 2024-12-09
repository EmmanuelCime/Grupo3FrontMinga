import axios from "axios"
import { useState } from "react"
import ButtonSave from "../Components/ButtonSave"
import ButtonDelete from "../Components/ButtonDelete"



function EditChapter() {
    const [formData, setFormData] = useState({
        nameManga: '',
        selectChapter: '',
        chapterData: '',
        dataEdit: ''
    })

    let handleChange = (e) => {
        let { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            let response = await axios.put('http://localhost:8080/api/editchapter', formData)
        } catch (error) {
            console.error('error editing chapter', error)
        }
    }

    return (
        <>
            <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center md:w-1/2 my-32 md:my-16">
                    <h1 className="text-center font-bold text-2xl mb-6">Edit Chapter</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[90vw] md:w-[60vw] lg:w-[40vw] mx-6">
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="nameManga"
                                value={formData.nameManga}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Name of the manga"
                            />
                        </div>
                        <div className="mt-1 mb-4">
                            <input list="chapterOption" name="selectChapter" value={formData.selectChapter} onChange={handleChange} className="w-full border-gray-400 focus:border-gray-500 px-2 bg-transparent outline-none border-0 border-b-2" placeholder="Select chapter" />
                            <datalist id="chapterOption" className="bg-white border border-gray-300 rounded-lg shadow-lg p-3">
                                <option value="" />
                                <option value="" />
                                <option value="" />
                                <option value="" />
                            </datalist>
                        </div>
                        <div className="mt-1 mb-4">
                            <input list="dataOption" name="chapterData" value={formData.chapterData} onChange={handleChange} className="w-full border-gray-400 focus:border-gray-500 px-2 bg-transparent outline-none border-0 border-b-2" placeholder="Select data" />
                            <datalist id="dataOption" className="bg-white border border-gray-300 rounded-lg shadow-lg p-3">
                                <option value="" />
                                <option value="" />
                                <option value="" />
                                <option value="" />
                            </datalist>
                        </div>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="dataEdit"
                                value={formData.dataEdit}
                                onChange={handleChange}
                                className="w-full border-0 outline-none px-3 border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Data to edit"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <ButtonSave name="Edit"/>
                            <ButtonDelete name="Delete"/>
                        </div>
                    </form>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <img className='w-full h-screen object-cover' src="https://s3-alpha-sig.figma.com/img/cd7b/cfec/c07083cef0707bd5864b287bac613f2b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aa72~qaQ-Re8JBUPxzkxXnEmKnF~Nksubt4JQlzlSyaNzCKI0yOFHb4M3jaIdNjawWVO7VvkTsBWhTN03z4KsmZA8WhV2jMxWVM2PJAnD0piJN30WPlc~QnVykKFP4CwvEbbwihCfqj9VoAAHWocAqPpcZDmnlZvtbifXp5LaI6iv8fUVn5-MuCjlzaYt1mRYVISghahbU3i2vVtbPt5V7gYm5Kq6vJX4et7u36v8lwqsnUviMfvNVJlj3t1c8l6vYcPmsBFDMzEU~6r3HAvc-IIchLyEBooDoJHVTy9IaK2pFeS-Gwe3nW6UApCQiKHRAitgbRjVrp7MqrZqRXw4g__" alt="Author background" />
                </div>
            </div>
        </>
    )
}


export default EditChapter