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


const router = createBrowserRouter([
  {
    element: <StandardLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/mangas", element: <PrivateRoute><Mangas /></PrivateRoute> },
      { path: "/manager", element: <PrivateRoute><Manager /></PrivateRoute> },
      { path: "/adminpanel", element: <PrivateRoute><AdminPanel /></PrivateRoute> },
      { path: "/profile", element: <Profile /> },
      { path: "/chapter/:id", element: <PrivateRoute><Chapter /></PrivateRoute> },
      { path: "/details/:id", element: <PrivateRoute><ChapterDetails /></PrivateRoute> },
      { path: "/edit/author", element: <PrivateRoute><EditAuthor /></PrivateRoute> },
      { path: "/edit/company", element: <PrivateRoute> <EditCompany /></PrivateRoute> },
      { path: "/favorites", element: <PrivateRoute><Favorites /></PrivateRoute> }
    ]
  },
  {
    element: <LayoutForms />,
    children: [
      { path: "/signin", element: <SignRoute><SignIn></SignIn></SignRoute> },
      { path: "/signup", element: <SignRoute><SignUp></SignUp></SignRoute> },
      { path: "/newrole", element: <PrivateRoute> <NewRole></NewRole></PrivateRoute> },
      { path: "/editchapter", element: <PrivateRoute><EditChapter></EditChapter></PrivateRoute> },
      { path: "/editmanga/:id", element: <PrivateRoute><EditManga></EditManga></PrivateRoute> },
      { path: "/newmanga", element: <PrivateRoute><NewManga></NewManga></PrivateRoute> },
      { path: "/newchapter/:id", element: <PrivateRoute><NewChapter></NewChapter></PrivateRoute> },
      { path: "/newauthor", element: <PrivateRoute><NewAuthor></NewAuthor></PrivateRoute> },
      { path: "/newcompany", element: <PrivateRoute><NewCompany></NewCompany></PrivateRoute> },
    ]
  },
  { path: "/*", element: <NotFound /> }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App