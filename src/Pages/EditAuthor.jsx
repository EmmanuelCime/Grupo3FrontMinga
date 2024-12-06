import imageProfile from "../assets/imageProfile.jpg";
import ProfileMobile from "../Components/ProfileMobile";
import FormAuthor from "../Components/FormAuthor";

export default function EditAuthor() {
    return (
        <div className="flex flex-col h-full justify-center items-center ">
            {/* Header with background image (hidden on small screens) */}
            <div
                className="hidden sm:block relative h-[500px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${imageProfile})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                {/* Main Title */}
                <div className="absolute inset-0 flex justify-center items-center mb-36 lg:mb-52">
                    <h1 className="text-white text-5xl font-bold">Profile</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col justify-center items-center bg-[#EBEBEB] sm:bg-white p-4 w-full lg:max-h-80 md:max-h-72 sm:w-11/12 sm:p-8 h-auto sm:relative sm:bottom-64 border border-none rounded-t-lg">
                <FormAuthor />
               
            </div>
        </div>
    );
}
