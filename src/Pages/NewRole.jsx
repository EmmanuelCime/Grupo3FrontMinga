import React, { useEffect, useState } from "react";
import imageNewRole from "../assets/imageNewRole.jpg";
import MingaLogotype from "../assets/mingaLogotype.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSwitch } from "../store/actions/authAction";
import CustomAlert from "../Components/CustomAlert";

export default function NewRole() {
  const { author, company, user, loading, token} = useSelector((state) => state. authReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [selectedRole, setSelectedRole] = useState("")
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [redirectAfterAlert, setRedirectAfterAlert] = useState(null);

  
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowAlert(true);

    // Caso: el usuario ya tiene este rol
    if ((role === "author" && author) || (role === "company" && company)) {
      setAlertMessage(
        `Your current role is ${role === "author" ? "Author" : "Company"}, keep enjoying`
      );
      setRedirectAfterAlert(() => () => navigate("/"));
    } else {
      // Caso: cambio de rol exitoso
      setAlertMessage(
        `Your role has been successfully switched to ${role === "author" ? "Author" : "Company"}!`
      );
      setRedirectAfterAlert(() => () => {
        dispatch(setSwitch());
        if (role === "author") {
          navigate("/newauthor");
        } else if (role === "company") {
          navigate("/newcompany");
        }
      });
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    if (redirectAfterAlert) redirectAfterAlert();
  };

  return (
    <div className="flex h-screen">
      {/* Alerta personalizada */}
      {showAlert && (
        <CustomAlert
          description={alertMessage}
          onClose={handleCloseAlert} 
        />
      )}
      {/* Lado izquierdo */}
      <div className="w-full md:w-1/2 mx-4  flex flex-col justify-center items-center bg-white">
        <div className="text-center">
          <p className="text-md text-orange-500 pr-3">Change role to</p>
          <h1 className=" mb-2 flex items-center">
            <img className="h-14" src={MingaLogotype} alt="Minga Logotype" />
          </h1>
        </div>

        <div className="flex flex-col gap-y-4 w-full sm:w-6/5 max-w-lg lg:w-10/12">
          {/* Botón de Autor */}
          <button
         onClick={() => handleRoleSelect("author")}
            className={`flex items-center py-5 px-4 sm:p-4 border-2 rounded-3xl shadow-sm transition ${selectedRole === "author"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-300 hover:bg-gray-50"
              } relative`}
          >
            <div className="flex items-center gap-x-4">
              <div className="flex">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="User 1"
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-white -ml-2 mt-1"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User 2"
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white -ml-2"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/10.jpg"
                  alt="User 3"
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-white -ml-2 mt-1"
                />
              </div>
              <div className="text-left">
                <p
                  className={`font-bold text-xs sm:text-sm ${selectedRole === "author" ? "text-orange-500" : "text-gray-700"
                    }`}
                >
                  Join as an Author!
                </p>
                <p
                  className={`text-xs sm:text-sm ${selectedRole === "author" ? "text-orange-500" : "text-gray-700"
                    }`}
                >
                  I’m a reader writing a manga
                </p>
              </div>
            </div>
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 border-2 rounded-full flex justify-center items-center absolute top-2 right-2 ${selectedRole === "author"
                ? "border-orange-500 bg-orange-200"
                : "border-gray-300 bg-white"
                }`}
            >
              {selectedRole === "author" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-6 sm:h-6 text-orange-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>

          {/* Botón de Compañía */}
          <button
           onClick={() => handleRoleSelect("company")}
            className={`flex items-center py-5 px-4 sm:p-4 border-2 rounded-3xl shadow-sm transition ${selectedRole === "company"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-300 hover:bg-gray-50"
              } relative`}
          >
            <div className="flex items-center gap-x-4">
              {/* Imágenes dinámicas */}
              <div className="flex">
                <img
                  src="https://randomuser.me/api/portraits/men/5.jpg"
                  alt="User 1"
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-white -ml-2 mt-1"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/20.jpg"
                  alt="User 2"
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white -ml-2"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/17.jpg"
                  alt="User 3"
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-white -ml-2 mt-1"
                />
              </div>

              {/* Texto dinámico */}
              <div className="text-left">
                <p
                  className={`font-bold text-xs sm:text-sm ${selectedRole === "company" ? "text-orange-500" : "text-gray-700"}`}
                >
                  Join as a Company!
                </p>
                <p
                  className={`text-xs sm:text-sm ${selectedRole === "company" ? "text-orange-500" : "text-gray-700"}`}
                >
                  I’m a company and I want <br className="block md:hidden"/> to publish my comics
                </p>
              </div>
            </div>

            {/* Checkbox dinámico */}
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 border-2 rounded-full flex justify-center items-center absolute top-2 right-2 ${selectedRole === "company"
                ? "border-orange-500 bg-orange-200"
                : "border-gray-300 bg-white"
                }`}
            >
              {selectedRole === "company" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-6 sm:h-6 text-orange-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>

      </div>

      {/* Lado derecho */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageNewRole})` }}>
        <div className="flex flex-col h-full p-8 bg-black bg-opacity-50 text-white">
          <div className="flex flex-col mx-20 mt-20">
            <p className="text-2xl mb-5 font-bold">
              Minga.com is the best place to find manga reviews. We’ve been
              super impressed by the quality of applicants.
            </p>
            <p className="italic">— Ignacio Borraz</p>
          </div>
        </div>
      </div>
    </div>
  );
}
