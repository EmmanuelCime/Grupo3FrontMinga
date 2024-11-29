import React from "react";
import imageSignUp from "../assets/imageSignUp.jpg";

export default function SignUp() {
  return (
    <div className="flex h-screen">
      {/* Contenedor del formulario */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        {/* Logo y título */}
        <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 flex items-center">
          Minga <span className="ml-2 text-black">雪</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Welcome!</h2>
        <p className="text-gray-600 mb-6 text-center">
          Discover manga, manhua and manhwa, track your progress, have fun, read manga.
        </p>

        {/* Formulario */}
        <form className="w-full max-w-md space-y-6">
          {/* Input de Email */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f97117] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              htmlFor="email"
              className="text-gray-500 before:content-[''] after:content-[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f97117] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f97117] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f97117] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Email
            </label>
          </div>

          {/* Input de Photo URL */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="text"
              id="photo"
              placeholder=" "
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f97117] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              htmlFor="photo"
              className="text-gray-500 before:content-[''] after:content-[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f97117] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f97117] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f97117] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Photo URL
            </label>
          </div>

          {/* Input de Password */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="password"
              id="password"
              placeholder=" "
              className=" peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f97117] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              htmlFor="password"
              className=" text-gray-500 before:content-[''] after:content-[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f97117] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f97117] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f97117] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Password
            </label>
          </div>

          {/* Botón de registro */}
          <button
            type="submit"
            className="w-full bg-[#f97117] text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors font-semibold mt-4"
          >
            Sign Up
          </button>

          {/* Botón de Google */}
          <button
            type="button"
            className="w-full border border-gray-300 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors mt-2 gap-3"
          >
            <img
              src="https://webimages.mongodb.com/_com_assets/cms/kr6fvgdym4qzsgqo3-Google%20Icon.svg?auto=format%252Ccompress"
              className="w-5 h-5"
              alt="google_logo"
            />
            <span className="text-gray-600">Sign up with Google</span>
          </button>

        </form>

        {/* Texto de ayuda */}
        <p className="text-sm text-gray-500 mt-6">
          Already have an account? <a href="#" className="text-orange-500">Log in</a>
        </p>
        <p className="text-sm text-gray-500">
          Go back to <a href="#" className="text-orange-500">home page</a>
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




