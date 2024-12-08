import imageProfile from "../assets/imageProfile.jpg";
import ProfileMobileAuthor from "../Components/ProfileMobileAuthor";
import FormAuthor from "../Components/FormAuthor";
import FormCompany from "../Components/FormCompany";
import ProfileMobileCompany from "../Components/ProfileMobileCompany";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAuthor } from "../store/actions/authorAction";

export default function Profile() {
   const { allAuthor, loading, error } = useSelector((state) => state.authorReducer)
    const dispatch = useDispatch()
    /* const {user} = useSelector((state)=> state.authReducer)
    const [author,setAuthor] = useState("")

    useEffect(() => {
        if (user && allAuthor.length > 0) {
            const foundAuthor = allAuthor.find((author) => author.userId === user._doc._id)
            setAuthor(foundAuthor || "")
            console.log(foundAuthor)
        }
    }, [user, allAuthor])*/

    useEffect(() => {
        console.log("Dispatching getAuthor...");
        dispatch(getAuthor())
            .unwrap()
            .then(() => console.log("Authors fetched successfully"))
            .catch((err) => console.error("Error fetching authors:", err));
    }, [dispatch]);/*
    
    //console.log({ allAuthor, loading, error });
    
    if (loading) {
        return <div>Cargando autores...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    
    const author = allAuthor?.find((author) => author.userId === "674d288708195416088f1279");
    console.log("Author:", author);*/

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

                {/* falta logica mediante el token depende del rol que tenga el usuario */}

                {/* si el usuario es author se muestra esto  */}
                <FormAuthor className="hidden sm:flex" />
                <ProfileMobileAuthor className="block sm:hidden" />

                {/* si el usuario es compania se muetra esto */}
                {/* <FormCompany className="hidden sm:flex"></FormCompany>
                <ProfileMobileCompany className="block sm:hidden "></ProfileMobileCompany> */}

            </div>
        </div>
    );
}
