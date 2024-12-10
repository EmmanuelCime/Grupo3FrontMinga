import imageSignUp from "../assets/imageSignUp.jpg";
import MingaLogotype from "../assets/mingaLogotype.png";
import ButtonPrimary from "../Components/ButtonPrimary";
import ButtonGoogle from "../Components/ButtonGoogle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { signUp } from "../store/actions/authAction";

export default function SignUp() {
  
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // Photo URL validation
    if (!photo.trim()) {
      newErrors.photo = "Photo URL is required";
    } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(photo)) {
      newErrors.photo = "Invalid image URL (must be jpg, png, gif, or webp)";
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password = "Password must include uppercase, lowercase, and number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field) => {
    setTouched({
      ...touched,
      [field]: true
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      email: true,
      password: true,
      photo: true
    });

    if (validateForm()) {
      dispatch(signUp({ 
        password, 
        email, 
        photo 
      }));
    }
  };



  return (
    <div className="flex h-screen">
      {/* Contenedor del formulario */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:p-8 p-5 bg-white">
        <img className="h-10 lg:h-14" src={MingaLogotype} alt="Minga Logotype" />

        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-4">
          Welcome <span className="text-orange-500">back!</span>
        </h2>
        <p className="text-gray-600 mb-6 text-center lg:text-sm text-xs">
          Discover manga, manhua and manhwa, track your <br className="hidden md:block" /> progress, have fun, read manga.
        </p>

        <form onSubmit={handleSignUp} className="w-full max-w-md lg:space-y-7 space-y-4">
          {/* Input de Email */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setTouched({...touched, email: true});
              }}
              onBlur={() => handleBlur('email')}
              required
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 pr-7 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f97117] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              htmlFor="email"
              className="text-gray-500 before:content-[''] after:content-[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f97117] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f97117] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f97117] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Email
            </label>
            {touched.email && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Input de Photo URL */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder=" "
              value={photo}
              onChange={(e) => {
                setPhoto(e.target.value);
                setTouched({...touched, photo: true});
              }}
              onBlur={() => handleBlur('photo')}
              required
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 pr-7 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f97117] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              htmlFor="photo"
              className="text-gray-500 before:content-[''] after:content-[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f97117] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f97117] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f97117] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Photo URL
            </label>
            {touched.photo && errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo}</p>}
          </div>

          {/* Input de Password */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setTouched({...touched, password: true});
              }}
              onBlur={() => handleBlur('password')}
              required
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 pr-7 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#f97117] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              htmlFor="password"
              className="text-gray-500 before:content-[''] after:content-[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f97117] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#f97117] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#f97117] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Password
            </label>
            {touched.password && errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div>
            <ButtonPrimary onClick={handleSignUp} name="Sign Up" />
            <ButtonGoogle name="Sign up with Google" />
          </div>
        </form>

        <p className="lg:text-sm text-xs text-gray-500 l:mt-6 mt-4 mb-2 font-semibold">
          Already have an account? <Link to="/signin" className="text-orange-500">Log in</Link>
        </p>
        <p className="lg:text-sm text-xs text-gray-500 font-semibold">
          Go back to <Link to="/home" className="text-orange-500">Home page</Link>
        </p>
      </div>

      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSignUp})` }}
      ></div>
    </div>
  );
}