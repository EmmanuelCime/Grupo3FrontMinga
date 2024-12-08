import { useState } from "react";
import imageSignIn from "../assets/imageSignIn.jpg";
import MingaLogotype from "../assets/mingaLogotype.png";
import ButtonPrimary from "../Components/ButtonPrimary";
import ButtonGoogle from "../Components/ButtonGoogle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../store/actions/authAction";
import { Link } from "react-router-dom";

const uri_render = "https://grupo3backminga.onrender.com/"

export default function SignIn() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, token, loading, error } = useSelector((state) => state.authReducer)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  if (token != "" && user?.email) {
    navigate("/home")
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSignIn = async (e) => {
    e.preventDefault()
    dispatch(signIn({ password: password, email: email }))
  }

  const handleSignInGoogle = () => {
    window.location.href = uri_render + "api/auth/signin/google"
  }

  return (
    <div className="flex h-screen">

      {/* Imagen lateral */}
      <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${imageSignIn})` }}
      ></div>

      {/* Contenedor del formulario */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5 bg-white">
        {/* Logo y título */}

        <img className="h-10 lg:h-14" src={MingaLogotype} alt="Minga Logotype" />



        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-4">Welcome <span className="text-orange-500">back!</span></h2>
        <p className="text-gray-600 mb-6 text-center lg:text-sm text-xs">
          Discover manga, manhua and manhwa, track your <br className="hidden md:block" /> progress, have fun, read manga.
        </p>

        {/* Formulario */}
        <form onSubmit={handleSignIn} className="w-full max-w-md space-y-6">
          {/* Input de Email */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => handleEmail(e)}
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f97117] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              htmlFor="email"
              className="text-gray-500 before:content-[''] after:content-[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f97117] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f97117] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f97117] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Email
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f97117]"
            >
              <path
                fillRule="evenodd"
                d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Input de Password */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="password"
              id="password"
              placeholder=" "
              value={password}
              onChange={(e) => handlePassword(e)}
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f97117] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              htmlFor="password"
              className="text-gray-500 before:content-[''] after:content-[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f97117] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f97117] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f97117] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Password
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f97117]"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
          {error && <p
            className="text-red-600 text-base text-center font-medium my-1"
          >{error}</p>}
          {/* Botón de inicio de sesión */}
          <ButtonPrimary onClick={handleSignIn} name="Sign In"></ButtonPrimary>

          {/* Botón de Google */}
          <ButtonGoogle onClick={handleSignInGoogle} name="Sign in with Google"></ButtonGoogle>
          </div>
        </form>

        {/* Texto de ayuda */}
        <p className="lg:text-sm text-xs text-gray-500 lg:mt-6 mt-4 mb-2 font-semibold">
          You don’t have an account yet? <Link to="/signup" className="text-orange-500">Sign up</Link>
        </p>
        <p className="lg:text-sm text-xs text-gray-500 font-semibold">
          Go back to  <Link to="/home" className="text-orange-500">home page</Link>
        </p>
      </div>
    </div>
  );
};
