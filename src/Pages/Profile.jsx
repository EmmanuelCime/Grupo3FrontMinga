import ProfileEditor from "../Components/FormProfile";
import imageProfile from "../assets/imageProfile.jpg";

export default function Profile() {
    return (
        <div className="flex flex-col h-full justify-center items-center ">
            {/* Header with background image (hidden on small screens) */}
            <div
                className="hidden sm:block relative h-[500px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${imageProfile})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                {/* Main Title */}
                <div className="absolute inset-0 flex justify-center items-center mb-36">
                    <h1 className="text-white text-5xl font-bold">Profile</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col justify-center items-center bg-white p-4 w-full sm:w-11/12 sm:p-8 h-auto sm:relative sm:bottom-64 border border-none rounded-t-lg">
                <ProfileEditor />
            </div>
        </div>
    );
}
