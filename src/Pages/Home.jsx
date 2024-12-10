
import { Link,useNavigate } from "react-router-dom"
import backgroundImage from "../assets/backgroundHome.png"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../store/actions/authAction"
import axios from "axios"
import Carousel from "../Components/Carousel"


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
    const { token } = useSelector((state) => state.authReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)

        const tokenUrl = params.get("token")
        if (tokenUrl) {
            localStorage.setItem("token", tokenUrl)
            loginWithToken(token)
                .then((data) => {
                    dispatch(setUser({ data, token }))
                })
        }
        navigate("/home")
    }, [])


    return (
        <>
            <div className="relative bg-cover bg-center h-screen md:h-screen text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="flex flex-col justify-center items-start h-screen md:h-[700px] p-6 md:p-14">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-start font-bold">For the love of manga</h1>
                    <p className="mt-4 sm:text-2xl md:text-3xl lg:text-4xl">Explore our varieties</p>
                    <p className="mt-4 md:text-3xl lg:text-2xl">#MingaLove <span className="text-red-500 text-3xl md:text-4xl"> ❤️</span></p>
                    <button className="md:text-xl lg:text-2xl w-32 lg:w-44 bg-white text-orange-500 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg mt-6 font-semibold">
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
            <div className="px-4 py-7 lg:py-0"><Carousel></Carousel></div>
            
        </>
    )
}


export default Home