import ButtonSend from "../Components/ButtonSend"


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


export default NewCompany