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


const router = createBrowserRouter([
  {
    element: <StandardLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/mangas", element: <Mangas /> },
      { path: "/manager", element: <Manager /> },
      { path: "/adminpanel", element: <AdminPanel /> },
      { path: "/profile", element: <Profile /> },
      { path: "/chapter/:id", element: <Chapter /> },
      { path: "/details/:id", element: <ChapterDetails /> },
      { path: "/edit/author", element: <EditAuthor /> },
      { path: "/edit/company", element: <EditCompany /> },
      { path: "/favorites", element: <Favorites /> }
    ]
  },
  {
    element: <LayoutForms />,
    children: [
      { path: "/signin", element: <SignIn></SignIn> },
      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/newrole", element: <NewRole></NewRole> },
      { path: "/editchapter", element: <EditChapter></EditChapter> },
      { path: "/editmanga", element: <EditManga></EditManga> },
      { path: "/newmanga", element: <NewManga></NewManga> },
      { path: "/newchapter", element: <NewChapter></NewChapter> },
      { path: "/newauthor", element: <NewAuthor></NewAuthor> },
      { path: "/newcompany", element: <NewCompany></NewCompany> },
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