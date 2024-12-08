import imageSignUp from "../assets/imageSignUp.jpg";
import MingaLogotype from "../assets/mingaLogotype.png";
import ButtonPrimary from "../Components/ButtonPrimary";
import ButtonGoogle from "../Components/ButtonGoogle";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { signUp } from "../store/actions/authAction";


export default function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading,error, user} = useSelector((state) => state.authReducer)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [photo, setPhoto] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handlePhoto = (e) => {
    setPhoto(e.target.value)
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    console.log("entrooooo");
    
    dispatch(signUp({password: password, email: email, photo: photo}))
  }

  useEffect(()=>{
    if (user) {
      navigate("/home")
    }
  },[user])

  return (
    <div className="flex h-screen">
      {/* Contenedor del formulario */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:p-8 p-5 bg-white">
        {/* Logo y tÃ­tulo */}
        <img className="h-10 lg:h-14" src={MingaLogotype} alt="Minga Logotype" />

        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-4">Welcome <span className="text-orange-500">back!</span></h2>
        <p className="text-gray-600 mb-6 text-center lg:text-sm text-xs">
          Discover manga, manhua and manhwa, track your <br className="hidden md:block" /> progress, have fun, read manga.
        </p>

        {/* Formulario */}
        <form onSubmit={handleSignUp} className="w-full max-w-md lg:space-y-3 space-y-2">
          {/* Input de Email */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={email} onChange={(e) => handleEmail(e)} required
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 pr-7 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f97117] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
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
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f97117] bg-white"
            >
              <path
                fillRule="evenodd"
                d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Input de Photo URL */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder=" "
              value={photo} onChange={(e) => handlePhoto(e)} required
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 pr-7 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f97117] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              htmlFor="photo"
              className="text-gray-500 before:content-[''] after:content-[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f97117] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f97117] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f97117] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Photo URL
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f97117] bg-white"
            >
              <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
              <path
                fillRule="evenodd"
                d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Input de Password */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              value={password} onChange={(e) => handlePassword(e)} required
              className=" peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 pr-7 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f97117] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              htmlFor="password"
              className=" text-gray-500 before:content-[''] after:content-[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f97117] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f97117] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f97117] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Password
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f97117] bg-white"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Checkbox */}
          <div className="flex items-center">
            <input
              id="notifications"
              type="checkbox"
              className="md:w-4 md:h-4 h-3 w-3 text-orange-500 bg-gray-100 rounded border-gray-300 focus:ring-orange-400 focus:ring-2"
            />
            <label htmlFor="notifications" className="ml-2 text-xs md:text-sm text-gray-600">
              Send notification to my email
            </label>
          </div>

          <div>
            {/* BotÃ³n de registro */}
            <ButtonPrimary onClick={handleSignUp} name="Sign Up"></ButtonPrimary>
            {/* BotÃ³n de Google */}
            <ButtonGoogle name="Sign up with Google"></ButtonGoogle>
          </div>

        </form>

        {/* Texto de ayuda */}
        <p className="lg:text-sm text-xs text-gray-500 l:mt-6 mt-4 mb-2 font-semibold">
          Already have an account? <Link to="/signin" className="text-orange-500">Log in</Link>
        </p>
        <p className="lg:text-sm text-xs text-gray-500 font-semibold">
          Go back to <Link to="/home" className="text-orange-500">home page</Link>
        </p>
      </div>

      {/* Imagen lateral */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSignUp})` }}
      ></div>
    </div>
  );
}






