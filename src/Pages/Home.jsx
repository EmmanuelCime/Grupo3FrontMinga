import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import backgroundImage from "../assets/backgroundHome.png"
import { useEffect, useState } from "react"

function Home() {

    const navigate = useNavigate()
    const [token, setToken] = useState(null)
    //const dispatch = useDispatch()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)

        const tokenUrl = params.get("token")
        if (tokenUrl) {
            localStorage.setItem("token", tokenUrl)
            setToken(tokenUrl)
            //     loginWithToken(token)
            //         .then((user) => {
            //             dispatch(setUser({ user, token }))
            //         })
        }
        //navigate("/home")
    }, [/*dispatch, navigate*/])

    useEffect(() => {
        if (token) {
            navigate("/home")
        }
    }, [token, navigate])

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
                        </Link>
                        )}
                    </button>
                </div>
            </div>
        </>

    )
}

export default Home