import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import StandardLayout from "./Layouts/StandardLayout.jsx";
import Mangas from "./Pages/Mangas.jsx";
import Manager from "./Pages/Manager.jsx";
import SignUp from "./Pages/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx";
import LayoutForms from "./Layouts/LayoutForms.jsx";
import NewRole from "./Pages/NewRole.jsx";
import AdminPanel from "./Pages/AdminPanel.jsx";
import Profile from "./Pages/Profile.jsx";
import Chapter from "./Pages/Chapter.jsx";
import ChapterDetails from "./Pages/ChapterDetails.jsx";
import EditChapter from "./Pages/EditChapter.jsx";
import EditAuthor from "./Pages/EditAuthor.jsx";
import EditCompany from "./Pages/EditCompany.jsx";
import Favorites from "./Pages/Favorites.jsx";
import EditManga from "./Pages/EditManga.jsx";
import NewManga from "./Pages/NewManga.jsx";
import NewChapter from "./Pages/NewChapter.jsx";
import NewAuthor from "./Pages/NewAuthor.jsx";
import NewCompany from "./Pages/NewCompany.jsx";
import PrivateRoute from "./Components/PrivateRoutes.jsx";
import SignRoute from "./Components/SignRoute.jsx";
import { useEffect } from "react";
import { setUser } from "./store/actions/authAction.js";
import { useDispatch } from "react-redux";
import axios from "axios";
import LoginRouter from "./Components/privareRouter/LoginRouter.jsx";
import AuthorCompanyAdminRouter from "./Components/privareRouter/AuthorCompanyAdminRouter.jsx";
import AuthorRouter from "./Components/privareRouter/AuthorRouter.jsx";
import CompanyRouter from "./Components/privareRouter/CompanyRouter.jsx";


const router = createBrowserRouter([
  {
    element: <StandardLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/mangas", element: <Mangas />},
      { path: "/manager", element: <AuthorCompanyAdminRouter><Manager/></AuthorCompanyAdminRouter>},
      { path: "/adminpanel", element: <AuthorCompanyAdminRouter><AdminPanel /></AuthorCompanyAdminRouter> },
      { path: "/profile", element: <LoginRouter><Profile /></LoginRouter> },
      { path: "/chapter/:id", element: <LoginRouter><Chapter /></LoginRouter>},
      { path: "/details/:id", element: <LoginRouter><ChapterDetails /></LoginRouter> },
      { path: "/edit/author", element: <AuthorRouter><EditAuthor/></AuthorRouter> },
      { path: "/edit/company", element: <CompanyRouter> <EditCompany /></CompanyRouter> },
      { path: "/favorites", element: <LoginRouter><Favorites /></LoginRouter> }
    ]
  },
  {
    element: <LayoutForms />,
    children: [
      { path: "/signin", element: <SignRoute><SignIn></SignIn></SignRoute> },
      { path: "/signup", element: <SignRoute><SignUp></SignUp></SignRoute> },
      { path: "/newrole", element: <LoginRouter> <NewRole></NewRole></LoginRouter> },
      { path: "/editchapter", element: <AuthorCompanyAdminRouter><EditChapter></EditChapter></AuthorCompanyAdminRouter> },
      { path: "/editmanga/:id", element: <AuthorCompanyAdminRouter><EditManga></EditManga></AuthorCompanyAdminRouter> },
      { path: "/newmanga", element: <AuthorCompanyAdminRouter><NewManga></NewManga></AuthorCompanyAdminRouter> },
      { path: "/newchapter/:id", element: <AuthorCompanyAdminRouter><NewChapter></NewChapter></AuthorCompanyAdminRouter> },
      { path: "/newauthor", element: <LoginRouter><NewAuthor></NewAuthor></LoginRouter> },
      { path: "/newcompany", element: <LoginRouter><NewCompany></NewCompany></LoginRouter> },
    ]
  },
  { path: "/*", element: <NotFound /> }
])
const loginWithToken = async (token) => {
  const uri_render = "http://localhost:8080/"
  try {
      const response = await axios.get(`${uri_render}api/auth/tokenVerification`,
          {
              headers: {
                  Authorization: `Bearer ${token}`
              },
          }
      )
      console.log(response.data);
      
      return response.data
  } catch (error) {
      console.error("Error validando el token", error)
      return null
  }
}


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const tokenLocal = localStorage.getItem("token")
    console.log("al cargar page");
    
    if (tokenLocal) {
      console.log("entro al if de validar");
      
        loginWithToken(tokenLocal)
            .then((data) => {
                dispatch(setUser({ data, token:tokenLocal }))
            })
    }
}, [dispatch])
  return (
    <RouterProvider router={router} />
  )
}

export default App