import { useEffect, useState } from "react";
import avatarProfile from "../assets/avatarProfile.jpg";
import mingaLogotype from "../assets/mingaLogotype.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, signOut } from "../store/actions/authAction"


const routes = [
  [{ to: "/", text: "Home" },{ to: "/mangas", text: "Mangas" },{ to: "/newrole", text: "Change Role" },{ to: "/favorites", text: "Favorites" }],
  [{ to: "/", text: "Home" },{ to: "/mangas", text: "Mangas" },{ to: "/newrole", text: "Change Role" },{ to: "/favorites", text: "Favorites" },{ to: "/manager", text: "Manager" },
   { to: "/details", text: "Details" }],
  [{ to: "/", text: "Home" },{ to: "/mangas", text: "Mangas" },{ to: "/newrole", text: "Change Role" },{ to: "/favorites", text: "Favorites" },{ to: "/manager", text: "Manager" },
    { to: "/details", text: "Details" }],
  [{ to: "/", text: "Home" },{ to: "/mangas", text: "Mangas" },{ to: "/newrole", text: "Change Role" },{ to: "/favorites", text: "Favorites" },{ to: "/manager", text: "Manager" },
      { to: "/adminpanel", text: "Admin Panel" }, { to: "/details", text: "Details" }],
  [{ to: "/", text: "Home" },{ to: "/signup", text: "Register" },{ to: "/signin", text: "Sign In" },{ to: "/mangas", text: "Mangas" }]
]

export default function SidebarWithToggle() {
  const { user, token, role } = useSelector((state) => state.authReducer)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const lineColor = location.pathname.startsWith("/details") ? "bg-white" : "bg-orange-500";
  const isUser = user?.role === 0 && token;
  const isManager = user?.role !== 0 && token;

  const handleLinkClick = () => {
    setIsSidebarOpen(false)
  }

  const handleSignOut = () => {
    dispatch(signOut())
    navigate("/home")
  }

  return (
    <div>
      {/* Botón Hamburguesa */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="p-2 bg-transparent text-white rounded-md absolute top-3 left-3 sm:left-8  md:left-14 z-20"
        aria-label="Toggle Sidebar"
      >
        {/* Icono Hamburguesa */}
        <span className={`block w-6 h-0.5 ${lineColor} mb-2`}></span>
        <span className={`block w-6 h-0.5 ${lineColor} mb-2`}></span>
        <span className={`block w-6 h-0.5 ${lineColor}`}></span>
      </button>

      {/* {Logo Minga} */}
      <NavLink to="/" className="absolute top-2 lg:top-1 right-5 sm:right-10 z-30">
        {/* Imagen para pantallas grandes */}
        <img
          src={mingaLogotype}
          alt="logo minga"
          className="hidden md:block h-14 z-50"
        />
        {/* Texto para pantallas pequeñas */}
        <p
          className="block md:hidden text-4xl text-white font-bold stroke-black stroke-2"
        >
          雪
        </p>
      </NavLink>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-screen w-full sm:w-72 bg-gradient-to-b from-orange-500 to-orange-600 shadow-lg z-30">
          <div className="flex flex-col items-center p-4 ">
            {/* Perfil */}
            {isUser ? (
              <>
                <div className="mb-4 flex items-center gap-3 md:mt-2">
                  <div className="h-10 w-10 md:h-12 md:w-12 mt-1">
                    <img
                      src={user?.photo || avatarProfile}
                      alt="User"
                      className="rounded-full h-10 w-10 md:h-12 md:w-12"

                    />
                  </div>
                  <p className="mt-2 text-white text-xs font-medium text-center pr-5">
                    {user?.email}
                  </p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full text-white font-semibold py-2 rounded-md hover:bg-white hover:text-orange-500"
                >
                  Sign Out
                </button>

              </>
            ) : ("")}
            {isManager && (
              <>
                <div className="mb-4 flex items-center gap-3 md:mt-2">
                  <NavLink to={`/profile`} className="h-10 w-10 md:h-12 md:w-12 mt-1">
                    <img
                      src={user?.photo || avatarProfile}
                      alt="User"
                      className="rounded-full h-10 w-10 md:h-12 md:w-12"
                      onClick={handleLinkClick}
                    />
                  </NavLink>
                  <p className="mt-2 text-white text-xs font-medium text-center pr-5">
                    {user?.email}
                  </p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full text-white font-semibold py-2 rounded-md hover:bg-white hover:text-orange-500"
                >
                  Sign Out
                </button>
              </>
            )}
            {/* Opciones */}
            <div className="mt-6 space-y-4 w-full">
              { role != null ? routes[role].map((route) => (
                <NavLink
                  key={route.to}
                  to={route.to}
                  className={({ isActive }) =>
                    `w-full block py-2 text-white text-center font-semibold rounded-md ${isActive
                      ? "bg-white !text-orange-500"
                      : "hover:bg-white hover:text-orange-500"
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  {route.text}
                </NavLink>
              )):
              routes[4].map((route) => (
                <NavLink
                  key={route.to}
                  to={route.to}
                  className={({ isActive }) =>
                    `w-full block py-2 text-white text-center font-semibold rounded-md ${isActive
                      ? "bg-white !text-orange-500"
                      : "hover:bg-white hover:text-orange-500"
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  {route.text}
                </NavLink>
              ))
              }
            </div>

            {/* Botón Cerrar */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-6 md:top-3 right-5 text-white text-2xl font-bold hover:text-gray-200"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
