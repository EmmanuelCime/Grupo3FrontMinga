import ButtonSave from "../Components/ButtonSave"
import ButtonDelete from "../Components/ButtonDelete"


function EditChapter() {

    return (
        <>
            <div className="flex">
                <div className="w-full max-w-sm mt-24 sm:ms-10 xl:ms-40 lg:me-20 xl:me-40 space-y-6 md:space-y-4">

                    <h1 className="text-center text-3xl mb-7 font-light">Edit Chapter</h1>

                    <input
                        type="text"
                        name="firstName"
                        //value={formData.firstName}
                        //onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Title of the chapter"
                    />
                    <input
                        type="text"
                        name="lastName"
                        //value={formData.lastName}
                        //onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Select chapter"
                    />
                    <input
                        type="text"
                        name="location"
                        //value={formData.location}
                        //onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Select data"
                    />
                    <input
                        type="text"
                        name="date"
                        //value={formData.date}
                        //onChange={handleInputChange}
                        className="w-full border-b border-gray-400 outline-none focus:border-gray-600"
                        placeholder="Data to edit"
                    />
                    <div className="flex flex-col items-center gap-4">
                        <ButtonSave name="Edit" />
                        <ButtonDelete name="Delete" />
                    </div>
                </div>
                
                <div className="hidden sm:block mt-24">
                    <h3 className="text-center text-xl mb-7 font-light">Title of the chapter</h3>
                    <img src="https://athenaposters.ca/wp-content/uploads/2022/01/RP21114-HUNTER-X-HUNTER-BOOK-KEY-ART.png" alt="" />
                </div>
            </div>
        </>
    )
}


export default EditChapter