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
      { path: "/chapter", element: <Chapter /> },
      { path: "/details", element: <ChapterDetails /> },
    ]
  },
  {
    element: <LayoutForms />,
    children: [
      { path: "/signin", element: <SignIn></SignIn> },
      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/newrole", element: <NewRole></NewRole> },
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