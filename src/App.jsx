import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import StandardLayout from "./Layouts/StandardLayout.jsx";

const router = createBrowserRouter([
  {
    element: <StandardLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> }
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