import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/cennik",
          element: <Pricing/>,
        },
      ]
    }
  ]
)

  return (
      <div>
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
