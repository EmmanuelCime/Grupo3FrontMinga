import imageProfile from "../assets/imageProfile.jpg";
import ProfileMobileAuthor from "../Components/ProfileMobileAuthor";
import FormAuthor from "../Components/FormAuthor";
import FormCompany from "../Components/FormCompany";
import ProfileMobileCompany from "../Components/ProfileMobileCompany";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const { user } = useSelector((state) => state.authReducer)
    const navigate = useNavigate()

    // Verificar si el token o el rol no es válido
    if (!user || (user.role !== 0 && user.role !== 1)) {
        navigate("/home");
        return null; // Evita que el componente siga renderizando
    }

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

                {/* Lógica para determinar qué mostrar según el rol */}
                {user.role === 1 ? (
                    <>
                        {/* Si el usuario es "author", mostrar lo siguiente */}
                        <FormAuthor className="hidden sm:flex" />
                        <ProfileMobileAuthor className="block sm:hidden" />
                    </>
                ) : (
                    <>
                        {/* Si el usuario es "compañía", mostrar lo siguiente */}
                        <FormCompany className="hidden sm:flex" />
                        <ProfileMobileCompany className="block sm:hidden" />
                    </>
                )}

            </div>
        </div>
    );
}


