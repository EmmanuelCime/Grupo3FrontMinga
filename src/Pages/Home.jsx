
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import backgroundImage from "../assets/backgroundHome.png"
import { useEffect, useState } from "react"
import Carousel from "../Components/Carousel"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../store/actions/authAction"
import axios from "axios"

const uri_render = "https://grupo3backminga.onrender.com/"

const loginWithToken = async (token) => {
    try {
        const response = await axios.get(`${uri_render}api/auth/tokenVerification`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        )
        return response.data.response
    } catch (error) {
        console.error("Error validando el token", error)
        return null
    }
}

function Home() {
    const { user, token, loading, error } = useSelector((state) => state.authReducer)
    const { allCategory } = useSelector((state) => state.categoryReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)

        const tokenUrl = params.get("token")
        if (tokenUrl) {
            localStorage.setItem("token", tokenUrl)
            loginWithToken(token)
                .then((user) => {
                    dispatch(setUser({ user, token }))
                })
        }
        navigate("/home")
    }, [])


    return (
        <>
            <div className="relative bg-cover bg-center h-screen md:h-[850px] text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="flex flex-col justify-center items-center h-screen md:h-[800px] gap-2 md:gap-6">
                    <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold">For the love of manga</h1>
                    <p className="mt-4 md:text-3xl lg:text-4xl">Explore our varieties #MingaLove❤️</p>
                    <button className="md:text-xl lg:text-2xl w-32 lg:w-44 bg-white text-orange-500 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg mt-6">
                        {!token ? (
                            <Link to={"/signin"}>
                                Sign In!
                            </Link>
                        ) : (<Link to={"/mangas"}>
                            Explore!
                        </Link>)}
                    </button>
                </div>
            </div>
            <Carousel></Carousel>
        </>
    )
}


export default Home